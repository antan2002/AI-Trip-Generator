

const express = require('express');
const router = express.Router();
const { signup, login } = require('../Controllers/authController');
const { signUpValidation, logInValidation } = require('../Middleware/AuthMiddleware');

router.post('/signup', signUpValidation, signup);
router.post('/login', logInValidation, login);

module.exports = router;
