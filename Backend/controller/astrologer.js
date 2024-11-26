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
    const astrologer = await Astrologer.findById(astrologerId)
      .populate("language", "value") // Populates language field with 'value'
      .populate("expertise", "value"); // Populates expertise field with 'value'

    if (!astrologer) return res.status(404).json("Astrologer not found");

    res.status(200).json(astrologer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};


export const filterAstrologers = async (req, res) => {
  try {
    const { languages, expertise } = req.body;

    const query = {};

    if (languages && languages.length > 0) {
      query.language = { $all: languages };
    }

    if (expertise && expertise.length > 0) {
      query.expertise = { $all: expertise };
    }

    // Find astrologers using the dynamically built query
    const astrologers = await Astrologer.find(query);

    return res.status(200).json(astrologers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

