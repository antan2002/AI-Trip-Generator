const express = require('express');
const app = express();
require('dotenv').config();
require('./Model/db')
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRoutes')
const TripRouter = require('./Routes/TripRoutes')

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/trip', AuthRouter);
app.use('/trip', TripRouter);

app.listen(PORT, () => {
    console.log(`server is running , ${PORT} `)
})