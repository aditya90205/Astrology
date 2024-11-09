// /controller/call.js
import Call from "../models/sp_call_master.js";  // Ensure the path to your model is correct

// Create a new call record
export const createCall = async (req, res) => {
  try {
    const { user_id, astrologer_id, date_of_call, call_duration, flag_free_paid_call = 'free' } = req.body;
    const call = new Call({
      user_id,
      astrologer_id,
      date_of_call,
      call_duration,
      flag_free_paid_call,
    });

    await call.save();
    res.status(201).json({ message: "Call created successfully", call });
  } catch (error) {
    res.status(500).json({ message: "Error creating call", error: error.message });
  }
};
// Get all call records
export const getAllCalls = async (req, res) => {
  try {
    const calls = await Call.find().populate("user_id astrologer_id");
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching calls", error: error.message });
  }
};

// Get a specific call by ID
export const getCallById = async (req, res) => {
  try {
    const call = await Call.findById(req.params.id).populate("user_id astrologer_id");
    if (!call) return res.status(404).json({ message: "Call not found" });
    res.status(200).json(call);
  } catch (error) {
    res.status(500).json({ message: "Error fetching call", error: error.message });
  }
};

// Update call record by ID
export const updateCall = async (req, res) => {
  try {
    const updatedCall = await Call.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCall) return res.status(404).json({ message: "Call not found" });
    res.status(200).json({ message: "Call updated successfully", updatedCall });
  } catch (error) {
    res.status(500).json({ message: "Error updating call", error: error.message });
  }
};

// Delete a call record by ID
export const deleteCall = async (req, res) => {
  try {
    const deletedCall = await Call.findByIdAndDelete(req.params.id);
    if (!deletedCall) return res.status(404).json({ message: "Call not found" });
    res.status(200).json({ message: "Call deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting call", error: error.message });
  }
};

// Get calls by user ID
export const getCallsByUserId = async (req, res) => {
  try {
    const calls = await Call.find({ user_id: req.params.userId }).populate("astrologer_id");
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user calls", error: error.message });
  }
};

// Get calls by astrologer ID
export const getCallsByAstrologerId = async (req, res) => {
  try {
    const calls = await Call.find({ astrologer_id: req.params.astrologerId }).populate("user_id");
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching astrologer calls", error: error.message });
  }
};
