import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import callRoute from "./routes/call.js"; 
import categoryRoute from "./routes/category.js";
import astrologerRoute from "./routes/astrologer.js";
import bannerRoute from "./routes/banners.js";
import userRoute from "./routes/user.js";
import { seedAstrologers, seedbanners, seedCategories, seedCollections } from "./seed.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoute);
app.use("/api/astrologer", astrologerRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/user", userRoute);
app.use("/api/calls", callRoute); 
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({ success: false, status, message });
});

// Default get
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

// Ping endpoint
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

// Connect to MongoDB
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "astrology" })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("Failed to connect");
      console.error(err);
    });
};

// Start the server function
const startServer = async () => {
  try {
    connectDB();
    await seedCollections();
    await seedAstrologers();
    await seedbanners();
    await seedCategories();

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

    // Self-ping every 10 minutes to keep the server active
    // Self-ping every 10 minutes to keep the server active
const pingInterval = 5 * 60 * 1000; // 10 minutes in milliseconds
setInterval(async () => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(`https://astrology-pi.vercel.app/ping`);
    if (!response.ok) {
      console.log("Ping failed:", response.status);
    } else {
      console.log("Ping successful:", response.status);
    }
  } catch (err) {
    console.error("Ping error:", err);
  }
}, pingInterval);

  } catch (error) {
    console.log(error);
  }
};

startServer();
