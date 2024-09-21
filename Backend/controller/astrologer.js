import Astrologer from "../models/sp_astrologer_master.js";

export const getAllAstrologers = async (req, res) => {
  try {
    const astrologers = await Astrologer.find({});
    return res.status(200).json(astrologers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAstrologerById = async (req, res) => {
  try {
    const { astrologerId } = req.params;
    const astrologer = await Astrologer.findById(astrologerId);
    if (!astrologer) return res.status(404).json("not found");
    res.status(200).json(astrologer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const filterAstrologers = async (req, res) => {
  try {
    const { languages, expertise } = req.body;
    const astrologers = await Astrologer.find({
      language: { $in: languages },
      expertise: { $in: expertise },
    });
    return res.status(200).json(astrologers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
