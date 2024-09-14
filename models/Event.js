const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
  location: String,
  attendees: [String],  // List of emails of attendees
});

module.exports = mongoose.model('Event', eventSchema);
