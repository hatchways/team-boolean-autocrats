const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');

// POST /profile - Create new profile
exports.createNewProfile = asyncHandler(async (req, res) => {
  const profile = req.body;
  const newProfile = new Profile({ ...profile });
  try {
    await newProfile.save();
    res.status(201).json({ status: 201, profile: newProfile, message: 'Profile created!' });
  } catch (error) {
    res.status(500);
    throw new Error('Error creating the profile.');
  }
});

// UPDATE /profile:id - Update profile with the given id
exports.updateProfile = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const profile = req.body;
  const options = { new: true };
  try {
    const updatedProfile = await Profile.findOneAndUpdate(id, profile, options);
    res.status(200).json({ status: 200, profile: updatedProfile, message: 'Your profile has been updated' });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Error updating the profile' });
  }
});

// GET /profile:id - Search profile with the given id
exports.searchProfile = asyncHandler(async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (profile) {
      res.status(200).json({ status: 200, profile: profile, message: 'Profile found!' });
    } else {
      res.status(404).json({ message: 'Profile not found!' });
    }
  } catch (error) {
    res.status(500);
    throw new Error('Error searching for a profile with that id.');
  }
});

// GET /profile - Fetch all existing profiles
exports.fetchAllProfiles = asyncHandler(async (req, res) => {
  try {
    const profiles = await Profile.find();
    if (profiles) {
      res.status(200).json({ status: 200, profile: profiles, message: 'Profiles found!' });
    } else {
      res.status(404).json({ message: 'Profiles not found!' });
    }
  } catch (error) {
    res.status(500);
    throw new Error('Error fetching profiles.');
  }
});
