import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// @desc    Create new comment
// @route   POST /api/comments
// @access  Private
export const createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;

    if (!content || !postId) {
      return res.status(400).json({ message: 'Please provide content and postId' });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId: req.user.id,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    });

    // Update post's commentIds array
    await prisma.post.update({
      where: { id: postId },
      data: {
        commentIds: {
          push: comment.id,
        },
      },
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get comments by post ID
// @route   GET /api/comments/post/:postId
// @access  Public
export const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: req.params.postId,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update comment
// @route   PUT /api/comments/:id
// @access  Private
export const updateComment = async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user is authorized to update the comment
    if (comment.authorId !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: req.params.id,
      },
      data: {
        content: req.body.content,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    });

    res.json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete comment
// @route   DELETE /api/comments/:id
// @access  Private
export const deleteComment = async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user is authorized to delete the comment
    if (comment.authorId !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    // Remove comment ID from post's commentIds array
    await prisma.post.update({
      where: { id: comment.postId },
      data: {
        commentIds: {
          set: prisma.post.findUnique({
            where: { id: comment.postId },
            select: { commentIds: true },
          }).commentIds.filter(id => id !== comment.id),
        },
      },
    });

    await prisma.comment.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}; 