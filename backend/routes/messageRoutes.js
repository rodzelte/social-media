import express from 'express';
import {
  sendMessage,
  getMessagesWith,
  getConversations,
} from '../controllers/messageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/', sendMessage);
router.get('/', getConversations);
router.get('/:userId', getMessagesWith);

export default router; 