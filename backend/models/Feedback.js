const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        trim: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);