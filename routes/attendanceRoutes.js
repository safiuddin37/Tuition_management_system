const express = require('express');
const {
  markStudentAttendance,
  markTeacherAttendance,
  getStudentAttendance,
  getTeacherAttendance,
  getAttendanceSummary
} = require('../controllers/attendanceController');
const { authenticateJWT } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/students', authenticateJWT, markStudentAttendance);
router.post('/teachers', authenticateJWT, markTeacherAttendance);
router.get('/students', authenticateJWT, getStudentAttendance);
router.get('/teachers', authenticateJWT, getTeacherAttendance);
router.get('/summary', authenticateJWT, getAttendanceSummary);

module.exports = router;
