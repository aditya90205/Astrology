import Banner from "../models/sp_banner_master.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find({});
    return res.status(200).json(banners);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
