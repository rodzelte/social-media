import express from 'express';
import auth from '../middleware/auth.js';
import {
  createComment,
  getPostComments,
  updateComment,
  deleteComment
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/', auth, createComment);
router.get('/post/:postId', auth, getPostComments);
router.put('/:id', auth, updateComment);
router.delete('/:id', auth, deleteComment);

export default router; 