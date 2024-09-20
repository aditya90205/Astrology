import express from "express";
import { getCatgeories } from "../controller/category.js";

const router = express.Router();
router.get("/", getCatgeories);

export default router;