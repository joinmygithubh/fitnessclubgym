require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const User = require('../src/models/User');
const ROLES = require('../src/constants/roles');

const createAdmin = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/fitness_club_gym';
  
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@fitnessclubgym.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@FitnessClub2026!';
  const adminName = process.env.ADMIN_NAME || 'Fitness Club Admin';

  try {
    await mongoose.connect(mongoUri);
    console.log('[Seed] Connected to database.');

    let admin = await User.findOne({ email: adminEmail.toLowerCase() });

    if (admin) {
      console.log(`[Seed] Admin user (${adminEmail}) already exists. Updating existing admin record...`);
      admin.name = adminName;
      admin.role = ROLES.ADMIN;
      admin.password = adminPassword; // Password hash pre-save hook will hash this securely
      await admin.save();
      console.log('[Seed] Admin user successfully updated.');
    } else {
      console.log(`[Seed] Creating new admin user (${adminEmail})...`);
      admin = await User.create({
        name: adminName,
        email: adminEmail.toLowerCase(),
        password: adminPassword,
        role: ROLES.ADMIN,
        phone: '7399999949'
      });
      console.log('[Seed] Admin user successfully created.');
    }

    console.log(`[Seed] Admin Email: ${admin.email}`);
    console.log(`[Seed] Admin Role: ${admin.role}`);
    console.log('[Seed] Password was hashed securely and NOT logged.');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error]', error.message);
    process.exit(1);
  }
};

createAdmin();
