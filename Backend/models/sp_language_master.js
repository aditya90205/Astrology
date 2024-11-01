// /home/dhiren-mhatre/code/digifuture/Astrology/Backend/models/sp_language_master.js
import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
  },
},{collection:"sp_language_master"});

const Language = mongoose.model("sp_language_master", languageSchema);
export default Language;
