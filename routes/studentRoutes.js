// routes/studentRoutes.js

const express = require('express');
const { addStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addStudent);
router.get('/', authenticateJWT, getStudents);
router.put('/:id', authenticateJWT, updateStudent);
router.delete('/:id', authenticateJWT, deleteStudent);

// Empty routes for adding, updating, and deleting centers for students
router.post('/:studentId/centers', authenticateJWT, (req, res) => {
    // Logic to add center for a specific student
});
router.put('/:studentId/centers/:centerId', authenticateJWT, (req, res) => {
    // Logic to update center for a specific student
});
router.delete('/:studentId/centers/:centerId', authenticateJWT, (req, res) => {
    // Logic to delete center for a specific student
});

module.exports = router;