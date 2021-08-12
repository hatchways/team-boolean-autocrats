const express = require('express');
const router = express.Router();

const protect = require('../middleware/auth');
const { createNewProfile, updateProfile, searchProfile, fetchAllProfiles } = require('../controllers/profile');

router.route('/').post(protect, createNewProfile);
router.route('/:id').get(protect, searchProfile);
router.route('/:id').patch(protect, updateProfile);
router.route('/').get(protect, fetchAllProfiles);

module.exports = router;
