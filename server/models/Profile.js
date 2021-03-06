const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Sitter', 'Owner', 'Sitter/Owner'],
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  availability: {
    start: {
      type: Date,
      required: false,
    },
    end: {
      type: Date,
      required: false,
    },
  },
  hourlyRate: {
    type: Number,
    required: false,
    trim: true,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
