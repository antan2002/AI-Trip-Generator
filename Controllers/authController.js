const newUser = require('../Model/user')
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await newUser.findOne({ email });
        if (user) {
            res.status(409).json({ message: "User already exists, you can login", success: false })
        }
        const userNewModel = new newUser({ name, email, password });
        userNewModel.password = await bcrypt.hash(password, 10)
        await userNewModel.save();
        res.status(201).json({ message: "Signup successful", success: true })
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "internal error", success: false })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await newUser.findOne({ email });
        const errorMessage = " Authetication failed , wrong Email & Password";
        if (!user) {
            res.status(403).json({
                message: errorMessage,
                success: false
            })
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            res.status(403).json({
                message: errorMessage,
                success: false
            })
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(201).json({ message: "Signup successful", success: true, jwtToken, name: user.name })
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ message: "internal error", success: false })
    }
}

module.exports = {
    signup,
    login
}

