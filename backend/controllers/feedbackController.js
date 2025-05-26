const Feedback = require('../models/Feedback.js');

exports.submitFeedback = async (req, res) => {
       try {
              console.log("hii")
              const { rating, comment, timestamp } = req.body;

              // Validate input
              if (!rating || rating < 1 || rating > 5) {
                     return res.status(400).json({ message: 'Rating must be between 1 and 5' });
              }
              if (!timestamp) {
                     return res.status(400).json({ message: 'Timestamp is required' });
              }

              // Create and save feedback
              const feedback = new Feedback({
                     rating,
                     comment,
                     timestamp: new Date(timestamp)
              });
              await feedback.save();

              res.status(200).json({ message: 'Feedback received' });
       } catch (error) {
              console.error('Error saving feedback:', error);
              res.status(500).json({ message: 'Failed to submit feedback. Please try again later.' });
       }
};