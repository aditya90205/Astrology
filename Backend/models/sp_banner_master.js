import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  sequenceNo: {
    type: Number,
  },
});

const Banner = mongoose.model("sp_banner_master", bannerSchema);
export default Banner;
