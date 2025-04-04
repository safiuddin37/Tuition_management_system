const express = require('express');
const { addStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addStudent);
router.get('/', authenticateJWT, getStudents);
router.put('/:id', authenticateJWT, updateStudent);
router.delete('/:id', authenticateJWT, deleteStudent);

module.exports = router;