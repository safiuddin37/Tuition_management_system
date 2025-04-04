// models/Teacher.js

const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    document: { type: String } // URL or path to the uploaded document
});

module.exports = mongoose.model('Teacher', teacherSchema);