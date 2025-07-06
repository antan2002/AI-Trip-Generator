const express = require('express');
const app = express();
require('dotenv').config();
require('./Model/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRoutes');
const TripRouter = require('./Routes/TripRoutes');

const PORT = process.env.PORT || 8080;

const allowedOrigins = [
    'https://ai-based-tripgenerator.netlify.app',
    'http://localhost:3000'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/trip', AuthRouter);
app.use('/trip', TripRouter);

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
