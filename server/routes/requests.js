const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth')

const { getRequests, createRequest, updateRequest } = require('../controllers/requests');

router.route('/').get(protect, getRequests);
router.route('/').post(protect, createRequest);
router.route('/:id').patch(protect, updateRequest);

module.exports = router;