const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendError } = require('../utils/response');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'fitness_club_gym_jwt_secret_key_2026_safe_prod'
      );

      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return sendError(res, 401, 'Not authorized, user not found');
      }

      req.user = user;
      return next();
    } catch (error) {
      return sendError(res, 401, 'Not authorized, token failed');
    }
  }

  if (!token) {
    return sendError(res, 401, 'Not authorized, no token provided');
  }
};

module.exports = { protect };
