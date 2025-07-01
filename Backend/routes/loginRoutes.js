const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Login = require('../models/loginModel');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Login.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'user not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        return res.status(200).json({ message: 'Login Successful', user });
    }
    catch (err) {
        return res.status(500).json({ message: 'server error', error: err.message });
    }
});

module.exports = router; 
 