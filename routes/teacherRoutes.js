// routes/teacherRoutes.js

const express = require('express');
const { addTeacher, getTeachers, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addTeacher);
router.get('/', authenticateJWT, getTeachers);
router.put('/:id', authenticateJWT, updateTeacher);
router.delete('/:id', authenticateJWT, deleteTeacher);

// Empty routes for adding, updating, and deleting centers for teachers
router.post('/:teacherId/centers', authenticateJWT, (req, res) => {
    // Logic to add center for a specific teacher
});
router.put('/:teacherId/centers/:centerId', authenticateJWT, (req, res) => {
    // Logic to update center for a specific teacher
});
router.delete('/:teacherId/centers/:centerId', authenticateJWT, (req, res) => {
    // Logic to delete center for a specific teacher
});

module.exports = router;