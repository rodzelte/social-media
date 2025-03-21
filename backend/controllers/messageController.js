import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sendMessage = async (req, res) => {
  try {
    const { content, receiverId } = req.body;

    // Check if receiver exists
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId }
    });

    if (!receiver) {
      return res.status(404).json({ message: 'Receiver not found' });
    }

    // Check if sender and receiver are friends
    const sender = await prisma.user.findUnique({
      where: { id: req.user.userId }
    });

    if (!sender.friendIds.includes(receiverId)) {
      return res.status(403).json({ message: 'Can only send messages to friends' });
    }

    const message = await prisma.message.create({
      data: {
        content,
        senderId: req.user.userId,
        receiverId
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true
          }
        },
        receiver: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
};

export const getConversation = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: req.user.userId, receiverId: req.params.userId },
          { senderId: req.params.userId, receiverId: req.user.userId }
        ]
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true
          }
        },
        receiver: {
          select: {
            id: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conversation' });
  }
};

export const getConversations = async (req, res) => {
  try {
    // Get all messages where user is either sender or receiver
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: req.user.userId },
          { receiverId: req.user.userId }
        ]
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true
          }
        },
        receiver: {
          select: {
            id: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Group messages by conversation
    const conversations = messages.reduce((acc, message) => {
      const otherUserId = message.senderId === req.user.userId
        ? message.receiverId
        : message.senderId;

      if (!acc[otherUserId]) {
        acc[otherUserId] = {
          user: message.senderId === req.user.userId
            ? message.receiver
            : message.sender,
          lastMessage: message,
          unreadCount: message.receiverId === req.user.userId ? 1 : 0
        };
      } else if (message.receiverId === req.user.userId) {
        acc[otherUserId].unreadCount++;
      }

      return acc;
    }, {});

    res.json(Object.values(conversations));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conversations' });
  }
}; 