const dotenv = require('dotenv');
dotenv.config();

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Feedback model
const Feedback = require('./Feedback');

// Create Express app
const app = express();

// Use PORT from .env or default 5000
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

// Test route
app.get('/', (req, res) => {
  res.send('Feedback backend is running');
});

// POST /api/feedback  → Save new feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, rating, message, category } = req.body;

    // Validation
    if (!name || !email || !rating || !message) {
      return res.status(400).json({
        message: 'Missing required fields (name, email, rating, message).'
      });
    }

    // Create new feedback document
    const newFeedback = new Feedback({
      name,
      email,
      rating,
      message,
      category
    });

    // Save to MongoDB
    await newFeedback.save();

    res.status(201).json({
      message: 'Feedback submitted successfully',
      feedback: newFeedback
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({
      message: 'Server error. Please try again later.'
    });
  }
});

// DATABASE + SERVER STARTUP
async function start() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');

    // ⭐⭐⭐ تعديل مهم جداً لـ Render ⭐⭐⭐
    // Render يحتاج السيرفر يسمع على 0.0.0.0 وليس localhost
    // حتى يقدر يفتح البورت للعالم الخارجي
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}

start();
