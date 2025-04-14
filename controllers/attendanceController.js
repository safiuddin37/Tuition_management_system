const StudentAttendance = require('../models/StudentAttendance');
const TeacherAttendance = require('../models/TeacherAttendance');

const markStudentAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;
    const attendance = new StudentAttendance({ studentId, status, markedBy: req.user._id });
    await attendance.save();
    res.status(201).json({ attendance });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const markTeacherAttendance = async (req, res) => {
  try {
    const { teacherId, status } = req.body;
    const attendance = new TeacherAttendance({ teacherId, status, markedBy: req.user._id });
    await attendance.save();
    res.status(201).json({ attendance });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getStudentAttendance = async (req, res) => {
  try {
    const { studentId, date } = req.query;
    const records = await StudentAttendance.find({ studentId, date });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTeacherAttendance = async (req, res) => {
  try {
    const { teacherId, date } = req.query;
    const records = await TeacherAttendance.find({ teacherId, date });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAttendanceSummary = async (req, res) => {
  try {
    const { date } = req.query;
    const studentCount = await StudentAttendance.countDocuments({ date });
    const teacherCount = await TeacherAttendance.countDocuments({ date });
    res.status(200).json({ studentCount, teacherCount });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  markStudentAttendance,
  markTeacherAttendance,
  getStudentAttendance,
  getTeacherAttendance,
  getAttendanceSummary
};
