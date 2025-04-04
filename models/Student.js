// models/Student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);