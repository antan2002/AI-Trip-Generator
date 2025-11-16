const express = require('express');
const app = express();
require('dotenv').config();
require('./Model/db'); // MongoDB connection

const cors = require('cors');
const bodyParser = require('body-parser');

// Route files
const AuthRouter = require('./Routes/AuthRoutes');
const TripRouter = require('./Routes/TripRoutes');

const PORT = process.env.PORT || 8080;

// Health check route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', AuthRouter);   // signup, login
app.use('/api/trips', TripRouter);  // save, get trips

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
