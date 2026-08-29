const express = require('express');
const router = express.Router();
const { submitContact, getContacts, updateContactStatus } = require('../controllers/contactController');
const { createContactValidation } = require('../validators/contactValidator');
const { validate } = require('../middleware/validationMiddleware');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

// Public inquiry submission
router.post('/', createContactValidation, validate, submitContact);

// Admin view and update inquiries
router.get('/', protect, adminOnly, getContacts);
router.patch('/:id', protect, adminOnly, updateContactStatus);

module.exports = router;
