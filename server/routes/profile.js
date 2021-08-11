const express = require('express');
const router = express.Router();

const protect = require('../middleware/auth');
const {
  createNewProfile,
  updateProfile,
  searchProfiles,
  fetchAllProfiles,
  //   deleteProfile,
} = require('../controllers/profile');

router.route('/').post(protect, createNewProfile);
router.route('/:id').get(protect, searchProfiles);
router.route('/:id').patch(protect, updateProfile);
router.route('/').get(protect, fetchAllProfiles);
// router.route('/:id').delete(protect, deleteProfile);

module.exports = router;
