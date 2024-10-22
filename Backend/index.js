import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import categoryRoute from "./routes/category.js";
import astrologerRoute from "./routes/astrologer.js";
import bannerRoute from "./routes/banners.js";
import { seedAstrologers, seedbanners } from "./seed.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", categoryRoute);
app.use("/api/astrologer", astrologerRoute);
app.use("/api/banner", bannerRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!!";
  return res.status.json({
    success: false,
    status,
    message,
  });
});
// default get
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

//function to connect mongo db
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "astrology" })
    .then(() => console.log("Monodb connected"))
    .catch((err) => {
      console.error("faled to connect");
      console.error(err);
    });
};

//function to start the server
const starServer = async () => {
  try {
    connectDB();
    await seedAstrologers();
    await seedbanners();
    app.listen(8080, () => console.log("server has been started"));
  } catch (error) {
    console.log(error);
  }
};
starServer();
