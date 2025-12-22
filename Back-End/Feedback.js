const mongoose = require("mongoose");

// Define the structure of a feedback document
const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "Feedback",
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Export the model
module.exports = mongoose.model("Feedback", feedbackSchema);
