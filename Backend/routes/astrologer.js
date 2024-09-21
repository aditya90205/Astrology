import express from "express";
import {
  filterAstrologers,
  getAllAstrologers,
  getAstrologerById,
} from "../controller/astrologer.js";

const router = express.Router();

router.get("/", getAllAstrologers);
router.post("/filter", filterAstrologers);
router.get("/:astrologerId", getAstrologerById);

export default router;

