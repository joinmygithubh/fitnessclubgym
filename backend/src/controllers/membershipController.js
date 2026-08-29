const membershipService = require('../services/membershipService');
const { sendSuccess } = require('../utils/response');

const createMembership = async (req, res, next) => {
  try {
    const { plan, notes } = req.body;
    const membership = await membershipService.createMembership(req.user._id, { plan, notes });
    return sendSuccess(res, 201, 'Membership request submitted', membership);
  } catch (error) {
    next(error);
  }
};

const getMyMemberships = async (req, res, next) => {
  try {
    const memberships = await membershipService.getUserMemberships(req.user._id);
    return sendSuccess(res, 200, 'User memberships fetched', memberships);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMembership,
  getMyMemberships
};
