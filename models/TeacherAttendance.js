const mongoose = require('mongoose');
const teacherAttendanceSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  date: { type: Date, required: true, default: Date.now },
  status: { type: String, enum: ['present', 'absent'], required: true },
  markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  markedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('TeacherAttendance', teacherAttendanceSchema);
