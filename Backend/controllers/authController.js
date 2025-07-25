const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

// Signup Controller
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

// Login Controller
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h'
    });

    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
