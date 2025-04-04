const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const centerRoutes = require('./routes/centerRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tutoring');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/centers', centerRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Tutoring Management System API');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});