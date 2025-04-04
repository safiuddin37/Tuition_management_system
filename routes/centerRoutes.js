// routes/centerRoutes.js

const express = require('express');
const { addCenter, getCenters, updateCenter, deleteCenter } = require('../controllers/centerController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addCenter);
router.get('/', authenticateJWT, getCenters);
router.put('/:id', authenticateJWT, updateCenter);
router.delete('/:id', authenticateJWT, deleteCenter);

module.exports = router;