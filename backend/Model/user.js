const mongoose = require('mongoose');

const Schemma = mongoose.Schema;

const userSchema = new Schemma({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const newUser = mongoose.model('users', userSchema);
module.exports = newUser;