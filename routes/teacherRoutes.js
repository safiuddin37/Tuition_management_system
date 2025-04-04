const express = require('express');
const { addTeacher, getTeachers, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addTeacher);
router.get('/', authenticateJWT, getTeachers);
router.put('/:id', authenticateJWT, updateTeacher);
router.delete('/:id', authenticateJWT, deleteTeacher);

module.exports = router;