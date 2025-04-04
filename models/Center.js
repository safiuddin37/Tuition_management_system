// models/Center.js

const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    centerName: { type: String, required: true },
    centerCode: { type: String, required: true },
    assignedTeacher: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Center', centerSchema);