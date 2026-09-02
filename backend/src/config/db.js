const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error('[Database] Connection Error: MONGO_URI environment variable is missing.');
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    return;
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`[Database] MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database] Connection Error: ${error.message}`);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
