const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const ROLES = require('../constants/roles');

class AuthService {
  async registerUser({ name, email, password, phone }) {
    // Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      throw new Error('User already exists with this email');
    }

    // STRICT ROLE ENFORCEMENT: Force role to 'user', ignoring any user-supplied role
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      phone: phone || '',
      role: ROLES.USER
    });

    const token = generateToken(user._id);

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token
    };
  }

  async loginUser({ email, password }) {
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = generateToken(user._id);

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      avatar: user.avatar,
      token
    };
  }

  async getUserProfile(userId) {
    const user = await User.findById(userId).select('-password').lean();
    if (!user) {
      throw new Error('User profile not found');
    }
    return user;
  }
}

module.exports = new AuthService();
