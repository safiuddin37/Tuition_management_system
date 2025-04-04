// controllers/teacherController.js

const Teacher = require('../models/Teacher');

const addTeacher = async (req, res) => {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).send('Teacher added successfully');
};

const getTeachers = async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
};

const updateTeacher = async (req, res) => {
    await Teacher.findByIdAndUpdate(req.params.id, req.body);
    res.send('Teacher updated successfully');
};

const deleteTeacher = async (req, res) => {
    await Teacher.findByIdAndDelete(req.params.id);
    res.send('Teacher deleted successfully');
};

module.exports = { addTeacher, getTeachers, updateTeacher, deleteTeacher };