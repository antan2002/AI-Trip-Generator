const mongoose = require('mongoose');

const mongoose_url = process.env.MONGO_CONN;

mongoose.connect(mongoose_url)
    .then(() => {
        console.log("mongodb is connected...")
    }).catch((err) => {
        console.log("mongodb connection error", err);
    })