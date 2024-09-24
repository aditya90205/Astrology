import express from "express";
import { getBanners } from "../controller/banner.js";

const router = express.Router();

router.get("/", getBanners);
export default router;
