// controllers/studentController.js

const Student = require('../models/Student');

const addStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send('Student added successfully');
};

const getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
};

const updateStudent = async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send('Student updated successfully');
};

const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Student deleted successfully');
};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };