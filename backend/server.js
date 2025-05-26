const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://sachinsourav95:rzt2i7tBWFivRYpN@cluster0.ya3hllb.mongodb.net/quizapp'; // Replace with your MongoDB URI
//rzt2i7tBWFivRYpN
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/feedback', feedbackRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});