// server.js

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const centerRoutes = require('./routes/centerRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/centers', centerRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Server Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Tutoring Management System API');
});

// Starting the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});