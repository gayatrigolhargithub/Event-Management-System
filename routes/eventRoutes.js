const express = require('express');
const { createEvent, getEvents, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/create', createEvent);       // Create event
router.get('/list', getEvents);            // List events
router.delete('/delete/:id', deleteEvent); // Delete event

module.exports = router;
