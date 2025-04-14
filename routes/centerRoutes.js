const express = require('express');
const { addCenter, getCenters, updateCenter, deleteCenter } = require('../controllers/centerController');
console.log('addCenter:', addCenter);
console.log('getCenters:', getCenters);
console.log('updateCenter:', updateCenter);
console.log('deleteCenter:', deleteCenter);
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', addCenter);
router.get('/', getCenters);
router.put('/:id', updateCenter);
router.delete('/:id', deleteCenter);

module.exports = router;