const express = require('express');
const router = express.Router();
const { createMembership, getMyMemberships } = require('../controllers/membershipController');
const { createMembershipValidation } = require('../validators/membershipValidator');
const { validate } = require('../middleware/validationMiddleware');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.post('/', createMembershipValidation, validate, createMembership);
router.get('/my', getMyMemberships);

module.exports = router;
