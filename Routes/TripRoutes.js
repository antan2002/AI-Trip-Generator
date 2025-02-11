const express = require('express');
const router = express.Router();
const Trip = require('../Model/Trip');

router.post('/save', async (req, res) => {
    try {
        const tripData = req.body;
        const trip = new Trip(tripData);
        const savedTrip = await trip.save();
        res.status(201).json(savedTrip);
    } catch (error) {
        console.error('Error saving trip:', error);
        res.status(500).json({ message: 'Error saving trip', error });
    }
});
router.get('/', async (req, res) => {
    console.log('Received request for all trips');
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).json({ message: 'Error fetching trips', error });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.json(trip);
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).json({ message: 'Error fetching trip', error });
    }
});
module.exports = router;
