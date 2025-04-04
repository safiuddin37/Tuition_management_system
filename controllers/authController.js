// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, password, name, category } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, name, category });
    await user.save();
    res.status(201).send('User  created successfully');
};

const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id, category: user.category }, 'secretKey');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
};

module.exports = { signup, signin };