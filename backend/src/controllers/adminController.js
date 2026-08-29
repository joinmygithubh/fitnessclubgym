const User = require('../models/User');
const Membership = require('../models/Membership');
const Gallery = require('../models/Gallery');
const Contact = require('../models/Contact');
const membershipService = require('../services/membershipService');
const { sendSuccess, sendError } = require('../utils/response');

const getDashboardStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalMemberships = await Membership.countDocuments({});
    const activeMemberships = await Membership.countDocuments({ status: 'active' });
    const totalInquiries = await Contact.countDocuments({});
    const unreadInquiries = await Contact.countDocuments({ status: 'unread' });
    const totalGalleryItems = await Gallery.countDocuments({});

    const recentInquiries = await Contact.find({}).sort({ createdAt: -1 }).limit(5).lean();
    const recentMemberships = await Membership.find({})
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    return sendSuccess(res, 200, 'Admin stats fetched', {
      stats: {
        totalUsers,
        totalMemberships,
        activeMemberships,
        totalInquiries,
        unreadInquiries,
        totalGalleryItems
      },
      recentInquiries,
      recentMemberships
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password').sort({ createdAt: -1 }).lean();
    return sendSuccess(res, 200, 'All users fetched', users);
  } catch (error) {
    next(error);
  }
};

const getAllMemberships = async (req, res, next) => {
  try {
    const memberships = await membershipService.getAllMemberships();
    return sendSuccess(res, 200, 'All memberships fetched', memberships);
  } catch (error) {
    next(error);
  }
};

const updateMembershipStatus = async (req, res, next) => {
  try {
    const { status, paymentStatus } = req.body;
    const updated = await membershipService.updateMembershipStatus(req.params.id, {
      status,
      paymentStatus
    });
    return sendSuccess(res, 200, 'Membership updated', updated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStats,
  getAllUsers,
  getAllMemberships,
  updateMembershipStatus
};
