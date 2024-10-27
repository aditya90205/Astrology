// /home/dhiren-mhatre/code/digifuture/Astrology/Backend/models/sp_expertise_master.js
import mongoose from "mongoose";

const expertiseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
  },
},{collection:"sp_expertise_master"});

const Expertise = mongoose.model("sp_expertise_master", expertiseSchema);
export default Expertise;
