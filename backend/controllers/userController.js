import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { username, bio } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        username,
        bio
      },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile' });
  }
};

export const addFriend = async (req, res) => {
  try {
    const { friendId } = req.params;

    // Check if friend exists
    const friend = await prisma.user.findUnique({
      where: { id: friendId }
    });

    if (!friend) {
      return res.status(404).json({ message: 'Friend not found' });
    }

    // Add friend to user's friend list
    const user = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        friendIds: {
          push: friendId
        }
      }
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding friend' });
  }
};

export const removeFriend = async (req, res) => {
  try {
    const { friendId } = req.params;

    const user = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        friendIds: {
          set: user.friendIds.filter(id => id !== friendId)
        }
      }
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error removing friend' });
  }
};

export const getFriends = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      include: {
        friendIds: true
      }
    });

    const friends = await prisma.user.findMany({
      where: {
        id: {
          in: user.friendIds
        }
      },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true
      }
    });

    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching friends' });
  }
}; 