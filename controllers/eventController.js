const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
  const { name, date, description, location, attendees } = req.body;
  try {
    const event = new Event({ name, date, description, location, attendees });
    await event.save();
    res.status(201).json({ message: 'Event created!', event });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
};
