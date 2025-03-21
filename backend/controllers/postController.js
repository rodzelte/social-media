import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await prisma.post.create({
      data: {
        content,
        userId: req.user.userId
      },
      include: {
        User: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        User: {
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

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id },
      include: {
        User: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await prisma.post.findUnique({
      where: { id: req.params.id }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    const updatedPost = await prisma.post.update({
      where: { id: req.params.id },
      data: { content },
      include: {
        User: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post' });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: req.params.id }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await prisma.post.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post' });
  }
}; 