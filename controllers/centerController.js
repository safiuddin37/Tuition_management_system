const Center = require('../models/Center');

const addCenter = async (req, res) => {
    try {
        const center = new Center(req.body);
        await center.save();
        res.status(201).send('Center added successfully');
    } catch (error) {
        console.error('Add center error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCenters = async (req, res) => {
    try {
        const centers = await Center.find();
        res.json(centers);
    } catch (error) {
        console.error('Get centers error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateCenter = async (req, res) => {
    try {
        await Center.findByIdAndUpdate(req.params.id, req.body);
        res.send('Center updated successfully');
    } catch (error) {
        console.error('Update center error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid center ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCenter = async (req, res) => {
    try {
        await Center.findByIdAndDelete(req.params.id);
        res.send('Center deleted successfully');
    } catch (error) {
        console.error('Delete center error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid center ID' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCenter, getCenters, updateCenter, deleteCenter };