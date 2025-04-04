// controllers/centerController.js

const Center = require('../models/Center');

const addCenter = async (req, res) => {
    const center = new Center(req.body);
    await center.save();
    res.status(201).send('Center added successfully');
};

const getCenters = async (req, res) => {
    const centers = await Center.find();
    res.json(centers);
};

const updateCenter = async (req, res) => {
    await Center.findByIdAndUpdate(req.params.id, req.body);
    res.send('Center updated successfully');
};

const deleteCenter = async (req, res) => {
    await Center.findByIdAndDelete(req.params.id);
    res.send('Center deleted successfully');
};

module.exports = { addCenter, getCenters, updateCenter, deleteCenter };