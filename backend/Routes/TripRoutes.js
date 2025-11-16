const express = require('express');
const router = express.Router();
const Trip = require('../Model/Trip'); // Ensure this model exists and is correct
const { authenticateUser } = require('../Middleware/AuthMiddleware');

// Route to save a new trip
router.post('/save', authenticateUser, async (req, res) => {
    try {
        const tripData = req.body;

        if (!tripData.location || !tripData.startDate || !tripData.endDate || !tripData.budget || !tripData.traveler || !tripData.itinerary || !tripData.hotelOptions) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        tripData.user = req.user._id;

        const newTrip = new Trip(tripData);
        const savedTrip = await newTrip.save();

        res.status(201).json(savedTrip);
    } catch (error) {
        console.error('❌ Error saving trip:', error.message);
        res.status(500).json({ message: 'Error saving trip', error: error.message });
    }
});

// Route to get all trips for a user
router.get('/', authenticateUser, async (req, res) => {
    try {
        const trips = await Trip.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(trips);
    } catch (error) {
        console.error('❌ Error fetching trips:', error.message);
        res.status(500).json({ message: 'Error fetching trips', error: error.message });
    }
});

// Route to get a single trip by ID
router.get('/:id', authenticateUser, async (req, res) => {
    try {
        const trip = await Trip.findOne({ _id: req.params.id, user: req.user._id });
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found or unauthorized' });
        }
        res.json(trip);
    } catch (error) {
        console.error('❌ Error fetching trip:', error.message);
        res.status(500).json({ message: 'Error fetching trip', error: error.message });
    }
});

module.exports = router;
