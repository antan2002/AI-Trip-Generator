const { login, signup } = require('../Controllers/authController');
const { logInValidation, signUpValidation } = require('../Middleware/AuthMiddleware');

const router = require('express').Router();

router.post('/login', logInValidation, login);
router.post('/signup', signUpValidation, signup);


module.exports = router;