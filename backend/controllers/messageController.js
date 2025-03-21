import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// @desc    Send a message to another user
// @route   POST /api/messages
// @access  Private
export const sendMessage = async (req, res) => {
  try {
    const { content, receiverId } = req.body;

    if (!content || !receiverId) {
      return res.status(400).json({ message: 'Please provide message content and receiver ID' });
    }

    const message = await prisma.message.create({
      data: {
        content,
        senderId: req.user.id,
        receiverId,
      },
      include: {
        sender: {
          select: {
            username: true,
          },
        },
        receiver: {
          select: {
            username: true,
          },
        },
      },
    });

    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get messages between current user and another user
// @route   GET /api/messages/:userId
// @access  Private
export const getMessagesWith = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          {
            AND: [
              { senderId: req.user.id },
              { receiverId: req.params.userId },
            ],
          },
          {
            AND: [
              { senderId: req.params.userId },
              { receiverId: req.user.id },
            ],
          },
        ],
      },
      include: {
        sender: {
          select: {
            username: true,
          },
        },
        receiver: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all conversations of current user
// @route   GET /api/messages
// @access  Private
export const getConversations = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: req.user.id },
          { receiverId: req.user.id },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Group messages by conversation partner
    const conversations = messages.reduce((acc, message) => {
      const partnerId = message.senderId === req.user.id ? message.receiverId : message.senderId;
      const partnerUsername = message.senderId === req.user.id ? message.receiver.username : message.sender.username;
      
      if (!acc[partnerId]) {
        acc[partnerId] = {
          partnerId,
          partnerUsername,
          lastMessage: message,
        };
      }
      return acc;
    }, {});

    res.json(Object.values(conversations));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}; 