const authService = require('../services/authService');
const { sendSuccess, sendError } = require('../utils/response');

const register = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    // Explicitly destructure only allowed fields - ignore any submitted role
    const result = await authService.registerUser({ name, email, password, phone });
    return sendSuccess(res, 201, 'User registered successfully', result);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser({ email, password });
    return sendSuccess(res, 200, 'Login successful', result);
  } catch (error) {
    return sendError(res, 401, error.message);
  }
};

const getMe = async (req, res, next) => {
  try {
    const profile = await authService.getUserProfile(req.user._id);
    return sendSuccess(res, 200, 'User profile fetched', profile);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe
};
