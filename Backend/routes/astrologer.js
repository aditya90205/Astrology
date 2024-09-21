import express from "express";
import {
  filterAstrologers,
  getAllAstrologers,
  getAstrologerById,
} from "../controller/astrologer";

const router = express.Router();

router.get("/", getAllAstrologers);
router.get("/:astrologerId", getAstrologerById);
router.post("/filter", filterAstrologers);
