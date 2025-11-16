// const joi = require('joi');

// const signUpValidation = (req, res, next) => {
//     const schema = joi.object({
//         name: joi.string().min(3).max(100).required(),
//         email: joi.string().email().required(),
//         password: joi.string().min(4).max(100).required()
//     })
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: "bad request", error })
//     }
//     next();
// }

// const logInValidation = (req, res, next) => {
//     const schema = joi.object({
//         email: joi.string().email().required(),
//         password: joi.string().min(4).max(100).required()
//     })
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: "bad request", error })
//     }
//     next();
// }

// module.exports = {
//     signUpValidation,
//     logInValidation
// }

const joi = require('joi');
const jwt = require('jsonwebtoken');
const User = require('../Model/user');

// Signup input validation
const signUpValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
    }
    next();
};

// Login input validation
const logInValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
    }
    next();
};

// JWT authentication middleware
const authenticateUser = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user; // Attach user to request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
    signUpValidation,
    logInValidation,
    authenticateUser
};
