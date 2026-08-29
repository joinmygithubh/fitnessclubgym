const Contact = require('../models/Contact');
const emailService = require('../services/emailService');
const { sendSuccess } = require('../utils/response');

const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    await emailService.sendContactNotification({ name, email, phone, message });

    return sendSuccess(res, 201, 'Inquiry submitted successfully. We will get back to you soon!', contact);
  } catch (error) {
    next(error);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return sendSuccess(res, 200, 'Contacts list retrieved', contacts);
  } catch (error) {
    next(error);
  }
};

const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    return sendSuccess(res, 200, 'Contact status updated', contact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getContacts,
  updateContactStatus
};
