const ROLES = require('../constants/roles');
const { sendError } = require('../utils/response');

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === ROLES.ADMIN) {
    return next();
  }
  return sendError(res, 403, 'Access denied: Administrator privileges required');
};

module.exports = { adminOnly };
