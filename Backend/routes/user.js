import express from "express";
import { login, register, getAllUsers, getUserById } from "../controller/user.js"; // Import the new function
import { updateProfile } from '../controller/user.js';

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/users", getAllUsers);
router.get("/user/:userId", getUserById);  // New route for getting a single user
router.put('/updateProfile/:userId', updateProfile);

export default router;
