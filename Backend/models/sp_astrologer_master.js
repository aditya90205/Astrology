// /home/dhiren-mhatre/code/digifuture/Astrology/Backend/models/sp_astrologer_master.js
import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    expertise: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sp_expertise_master",
      },
    ],
    language: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sp_language_master",
      },
    ],
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
    ratingCount: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sp_status_master",
    },
  },
  {
    collection: "sp_astrologer_master",
    timestamps: { updatedAt: true, createdAt: false }, // Adds only updatedAt timestamp
  }
);

const Astrologer = mongoose.model("sp_astrologer_master", astrologerSchema);
export default Astrologer;
