const mongoose = require("mongoose");
const UserRequests = require( "../models/UserRequests");

//GET /requests: list of requests for logged in user
exports.getRequests = async (req, res) => {
  try {
    const userRequests = await UserRequests.find();
    res.status(200).json(userRequests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// // POST /request: Create a new request
exports.createRequest = async (req, res) => {
  const request = req.body;
  const newRequest = new UserRequests(request);

  try {
    await newRequest.save();
    res.status(201).json(newRequest);

  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

// // UPDATE /request/:id : Update request with approved or decline
exports.updateRequest = async (req, res) => {
  const { id: _id } = req.params;
  const request = req.body;

  //check if _id is mongoose object id
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No request with that id');

  const updatedRequest = await UserRequests.findByIdAndUpdate(_id, request, { new: true });
  res.json(updatedRequest);
}
