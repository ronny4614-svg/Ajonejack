require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet()); // Sets secure HTTP headers
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json()); // Parses incoming JSON payloads

// Rate Limiting (As requested in security specs)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', apiLimiter);

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/antovs_db')
  .then(() => console.log('✅ MongoDB securely connected'))
  .catch(err => console.error('❌ Database connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', system: 'ANTOVS Backend API', uptime: process.uptime() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 ANTOVS Server running on port ${PORT}`);
});
