import Category from "../models/sp_category_master.js";

export const getCatgeories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};