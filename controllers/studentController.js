const Student = require('../models/Student');


const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send('Student added successfully');
    } catch (error) {
        console.error('Add student error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error('Get students error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateStudent = async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send('Student updated successfully');
    } catch (error) {
        console.error('Update student error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid student ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send('Student deleted successfully');
    } catch (error) {
        console.error('Delete student error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid student ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };