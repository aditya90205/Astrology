// /home/dhiren-mhatre/code/digifuture/Astrology/Backend/models/sp_status_master.js
import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    enum: ["disable", "online", "offline", "busy", "on break"],
    required: true,
  },
},{collection: "sp_status_master"});

const Status = mongoose.model("sp_status_master", statusSchema);
export default Status;
