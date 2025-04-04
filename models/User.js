const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, enum: ['admin', 'teacher'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
