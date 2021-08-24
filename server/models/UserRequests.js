const mongoose = require('mongoose');

const userRequestsSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true
  },
  sitter_id: {
    type: Number,
    required: true,
    unique: true
  },
  start_date: {
    type: Date,
    default: Date.now(),
  },
  end_date: {
    type: Date,
    //7 Days later
    default: () => Date.now() + 7*24*60*60*1000,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  declined: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },

});

module.exports = UserRequests = mongoose.model("UserRequests", userRequestsSchema);