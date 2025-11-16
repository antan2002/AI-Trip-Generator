const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    price: String,
    imageUrl: String,
    geoCoordinates: String,
    rating: Number,
    description: String,
});

const itinerarySchema = new mongoose.Schema({
    name: String,
    details: String,
    imageUrl: String,
    geoCoordinates: String,
    ticketPricing: String,
    rating: Number,
    time: String,
});

const tripSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    location: String,
    startDate: Date,
    endDate: Date,
    budget: String,
    traveler: String,
    hotelOptions: [hotelSchema],
    itinerary: {
        day1: itinerarySchema,
        day2: itinerarySchema,
        day3: itinerarySchema,
        day4: itinerarySchema,
        day5: itinerarySchema,
        day6: itinerarySchema,
        day7: itinerarySchema,
        day8: itinerarySchema,
        day9: itinerarySchema,
        day10: itinerarySchema,
    },
}, { timestamps: true });

const Trip = mongoose.model('Trip-Db', tripSchema);

module.exports = Trip;
