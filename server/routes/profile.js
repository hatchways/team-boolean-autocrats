const express = require('express');
const router = express.Router();

const protect = require('../middleware/auth');
const { createNewProfile, updateProfile, searchProfiles, fetchAllProfiles } = require('../controllers/profile');

router.route('/').post(protect, createNewProfile);
router.route('/:id').get(protect, searchProfiles);
router.route('/:id').patch(protect, updateProfile);
router.route('/').get(protect, fetchAllProfiles);

module.exports = router;
