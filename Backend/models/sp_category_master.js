import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  discription: {
    type: String,
    unique: true,
    trim: true,
    default: "",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Category = mongoose.model("sp_category_master", categorySchema);
export default Category;