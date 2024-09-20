import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expertise",
  },
  lang: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  },
  experience: {
    type: Number,
  },
  minRate: {
    type: Number,
  },
  discountedRate: {
    type: Number,
  },
  imgLink: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  followers: {
    type: Number,
  },
  status: {
    type: Number,
  },
});
