const Membership = require('../models/Membership');

class MembershipService {
  async createMembership(userId, { plan, notes }) {
    const membership = await Membership.create({
      user: userId,
      plan,
      notes: notes || '',
      status: 'pending',
      paymentStatus: 'pending'
    });
    return membership;
  }

  async getUserMemberships(userId) {
    return await Membership.find({ user: userId }).sort({ createdAt: -1 }).lean();
  }

  async getAllMemberships() {
    return await Membership.find({})
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 })
      .lean();
  }

  async updateMembershipStatus(id, { status, paymentStatus }) {
    const membership = await Membership.findById(id);
    if (!membership) {
      throw new Error('Membership not found');
    }

    if (status) membership.status = status;
    if (paymentStatus) membership.paymentStatus = paymentStatus;

    // Set end date automatically if activated (e.g. 30 days default)
    if (status === 'active' && !membership.endDate) {
      const now = new Date();
      membership.startDate = now;
      membership.endDate = new Date(now.setDate(now.getDate() + 30));
    }

    await membership.save();
    return membership;
  }
}

module.exports = new MembershipService();
