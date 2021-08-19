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
  dateOfBirth: Date,
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: false,
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
    enum: ['Sitter', 'Owner'],
    default: 'Owner',
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  availableHoursPerWeek: {
    type: String,
    required: false,
    enum: [
      'More than 10 hrs/week',
      'More than 20 hrs/week',
      'More than 30 hrs/week',
      'More than 40 hrs/week',
      'More than 50 hrs/week',
    ],
  },
  availabilityPerWeek: {
    monday: { type: Boolean, default: false },
    tuesday: { type: Boolean, default: false },
    wednesday: { type: Boolean, default: false },
    thursday: { type: Boolean, default: false },
    friday: { type: Boolean, default: false },
    saturday: { type: Boolean, default: false },
    sunday: { type: Boolean, default: false },
  },
  hourlyRate: {
    type: Number,
    required: false,
    trim: true,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
