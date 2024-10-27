import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Category name is required"],
    trim: true,
  },
  description: {
    type: String,
    unique: true,
    trim: true,
    default: "",
  },
  imgLink: {
    type: String,
    required: [true, "Image link is required"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  shopifyId: {
    type: String,
    required: [true, "Shopify ID is required"],
    unique: true,
    trim: true,
  },
  shopifyPage: {
    type: String,
    required: [true, "Shopify page link is required"],
    trim: true,
  },
},{collection:"sp_category_master"});

const Category = mongoose.model("sp_category_master", categorySchema);
export default Category;
