const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { apiLimiter } = require('./middleware/rateLimitMiddleware');
const { errorHandler } = require('./middleware/errorMiddleware');
const { sendError } = require('./utils/response');

// Route imports
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Security headers
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true); // Allow during dev/testing
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Apply rate limiting to all requests
app.use(apiLimiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root API Information Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Fitness Club Gym API is running',
    status: 'ok',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Production-ready Health Check Handler
const getHealthStatus = (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  const statusCode = isDbConnected ? 200 : 503;

  return res.status(statusCode).json({
    success: isDbConnected,
    message: isDbConnected ? 'Fitness Club Gym API is healthy' : 'Fitness Club Gym API is unhealthy',
    status: isDbConnected ? 'ok' : 'error',
    database: isDbConnected ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
};

// Health Check API Endpoints
app.get('/api/health', getHealthStatus);
app.get('/api/v1/health', getHealthStatus);

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/memberships', membershipRoutes);
app.use('/api/v1/gallery', galleryRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/admin', adminRoutes);

// 404 Route Handler
app.use((req, res) => {
  sendError(res, 404, `Route ${req.originalUrl} not found`);
});

// Centralized Error Middleware
app.use(errorHandler);

module.exports = app;
