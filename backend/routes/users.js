import express from 'express';
import auth from '../middleware/auth.js';
import {
  getProfile,
  updateProfile,
  addFriend,
  removeFriend,
  getFriends
} from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.post('/friends/:friendId', auth, addFriend);
router.delete('/friends/:friendId', auth, removeFriend);
router.get('/friends', auth, getFriends);

export default router; 