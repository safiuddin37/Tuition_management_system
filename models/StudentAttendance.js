const mongoose = require('mongoose');
const studentAttendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  date: { type: Date, required: true, default: Date.now },
  status: { type: String, enum: ['present', 'absent'], required: true },
  markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  markedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('StudentAttendance', studentAttendanceSchema);
