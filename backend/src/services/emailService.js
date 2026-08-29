const logger = require('../utils/logger');

class EmailService {
  async sendContactNotification({ name, email, phone, message }) {
    // In production, integrate Nodemailer or SendGrid.
    // For now log formatted email notification cleanly.
    logger.info(`[Email Notification] New Contact Request from ${name} (${email}, ${phone}): "${message}"`);
    return true;
  }
}

module.exports = new EmailService();
