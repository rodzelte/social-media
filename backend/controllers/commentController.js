import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;

    // Check if post exists
    const post = await prisma.post.findUnique({
      where: { id: postId }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
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

    // Update post's commentIds array
    await prisma.post.update({
      where: { id: postId },
      data: {
        commentIds: {
          push: comment.id
        }
      }
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment' });
  }
};

export const getPostComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: req.params.postId },
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

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { content } = req.body;

    const comment = await prisma.comment.findUnique({
      where: { id: req.params.id }
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.userId !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this comment' });
    }

    const updatedComment = await prisma.comment.update({
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

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating comment' });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.id }
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.userId !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    // Remove comment from post's commentIds array
    await prisma.post.update({
      where: { id: comment.postId },
      data: {
        commentIds: {
          set: comment.post.commentIds.filter(id => id !== comment.id)
        }
      }
    });

    await prisma.comment.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment' });
  }
}; 