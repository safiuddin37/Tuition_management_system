const Teacher = require('../models/Teacher');


const addTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).send('Teacher added successfully');
    } catch (error) {
        console.error('Add teacher error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        console.error('Get teachers error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateTeacher = async (req, res) => {
    try {
        await Teacher.findByIdAndUpdate(req.params.id, req.body);
        res.send('Teacher updated successfully');
    } catch (error) {
        console.error('Update teacher error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid teacher ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.send('Teacher deleted successfully');
    } catch (error) {
        console.error('Delete teacher error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid teacher ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addTeacher, getTeachers, updateTeacher, deleteTeacher };