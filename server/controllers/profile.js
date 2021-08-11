const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');

// POST /profile - Create new profile
exports.createNewProfile = asyncHandler(async (req, res) => {
  const profile = req.body;
  const newProfile = new Profile({ ...profile });

  if (!newProfile) {
    res.status(500);
    throw new Error('Error creating the profile.');
  }
  await newProfile.save();
  res.status(201).json({ status: 201, profile: newProfile, message: 'Profile created!' });
});

// UPDATE /profile:id - Update profile with the given id
exports.updateProfile = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const profile = req.body;

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(id, profile, {
      new: true,
    });
    res.status(201).json({ status: 201, profile: updatedProfile, message: 'Profile updated!' });
  } catch (error) {
    res.status(500);
    throw new Error('Error updating the profile.');
  }
});

// GET /profile:id - Search profile with the given id
exports.searchProfiles = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.profile.id);
  if (!profile) {
    res.status(404);
    throw new Error('Error searching for a profile with that id.');
  }
  res.status(200).json({ status: 200, profile: profile, message: 'Profile found!' });
});

// GET /profile - Fetch all existing profiles
exports.fetchAllProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find();
  if (!profiles) {
    res.status(404);
    throw new Error('Error fetching profiles.');
  }
  res.status(200).json({ status: 200, profile: profiles, message: 'Profiles found!' });
});

// DELETE /profile/:id - Delete a profile with the given id
// exports.deleteProfile = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const profile = Profile.findById(id);
//   if (!profile) {
//     res.status(404);
//     throw new Error('Error finding the profile.');
//   }
//   try {
//     Profile.findByIdAndDelete(id);
//     res.status(200);
//   } catch (error) {
//     res.status(500);
//     throw new Error('Error deleting profile.');
//   }
// });