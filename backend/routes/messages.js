import express from 'express';
import auth from '../middleware/auth.js';
import {
  sendMessage,
  getConversation,
  getConversations
} from '../controllers/messageController.js';

const router = express.Router();

router.post('/', auth, sendMessage);
router.get('/conversation/:userId', auth, getConversation);
router.get('/conversations', auth, getConversations);

export default router;