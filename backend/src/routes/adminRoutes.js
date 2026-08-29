const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getAllUsers,
  getAllMemberships,
  updateMembershipStatus
} = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

// ALL admin routes strictly require valid JWT and admin role
router.use(protect);
router.use(adminOnly);

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.get('/memberships', getAllMemberships);
router.patch('/memberships/:id', updateMembershipStatus);

module.exports = router;
