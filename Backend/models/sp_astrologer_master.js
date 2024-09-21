import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertise: [
    {
      type: String,
      enum: [
        "Vedic",
        "Numerology",
        "KP System",
        "Lal Kitab",
        "Horary",
        "Vastu",
        "Tarot Reading",
        "Love Life",
        "Nadi",
        "Marriage Matching",
        "Ashtakavarga",
        "Palmistry",
        "Ramal",
        "Jaimini",
        "Tajik",
        "Western",
        "South Astrology",
        "Ravan Sahita",
        "Swar Shastra",
        "Reiki",
        "Crystal Healing",
        "Angel Reading",
        "Pendulum Dowsing",
        "Psychic Reading",
        "Face Reading",
        "Muhurat",
      ],
    },
  ],
  language: [
    {
      type: String,
      enum: [
        "English",
        "Hindi",
        "Gujarati",
        "Marathi",
        "Tamil",
        "Telugu",
        "Kannada",
        "Malayalam",
        "Bengali",
        "Punjabi",
      ],
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
    default: 0, // Set default to 0 since initially there will be no ratings
  },
  followers: {
    type: Number,
  },
  status: {
    type: Number,
    enum: [0, 1, 2],
  },
});

const Astrologer = mongoose.model("sp_astrologer_master", astrologerSchema);
export default Astrologer;
