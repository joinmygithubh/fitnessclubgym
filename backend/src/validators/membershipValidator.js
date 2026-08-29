const { body } = require('express-validator');

const createMembershipValidation = [
  body('plan').trim().notEmpty().withMessage('Membership plan is required'),
  body('notes').optional().trim()
];

const updateMembershipStatusValidation = [
  body('status')
    .isIn(['pending', 'active', 'expired', 'cancelled'])
    .withMessage('Invalid status value'),
  body('paymentStatus')
    .optional()
    .isIn(['pending', 'paid', 'failed'])
    .withMessage('Invalid payment status value')
];

module.exports = {
  createMembershipValidation,
  updateMembershipStatusValidation
};
