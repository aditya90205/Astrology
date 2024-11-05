// /routes/call.js
import express from "express";
import {
  createCall,
  getAllCalls,
  getCallById,
  updateCall,
  deleteCall,
  getCallsByUserId,
  getCallsByAstrologerId,
} from "../controller/call.js";

const router = express.Router();

router.post("/", createCall);              // Create a new call
router.get("/", getAllCalls);              // Get all calls
router.get("/:id", getCallById);           // Get a call by ID
router.put("/:id", updateCall);            // Update a call by ID
router.delete("/:id", deleteCall);         // Delete a call by ID
router.get("/user/:userId", getCallsByUserId); // Get calls by user ID
router.get("/astrologer/:astrologerId", getCallsByAstrologerId); // Get calls by astrologer ID

export default router;
