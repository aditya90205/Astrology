import mongoose from "mongoose";
import Category from "./models/sp_category_master.js"; // Adjust the path accordingly
import dotenv from "dotenv";
import Astrologer from "./models/sp_astrologer_master.js";
import Banner from "./models/sp_banner_master.js";
dotenv.config();
// Connect to your MongoDB database
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, { dbName: "astrology" })
  .then(() => console.log("Monodb connected"))
  .catch((err) => {
    console.error("faled to connect");
    console.error(err);
  });

// Category data
const categories = [
  {
    name: "Agarbatti",
    img: "https://mangalbhawan.com/public/uploads/all/koMeQgkJKwol56S5C7FQOse0EP7ZigRekCCd0PAi.png",
  },
  {
    name: "Dry Dhoop Cones",
    img: "https://mangalbhawan.com/public/uploads/all/6kyM2qiBtCiJcj6pAtFLWWkh17Rq8SYrJ2HZvt8Q.png",
  },
  {
    name: "Dhoop Sticks",
    img: "https://mangalbhawan.com/public/uploads/all/GrWgdpKp2N3k7WFK5PkhyF5TQqJzCUQX4SMcQC7d.png",
  },
  {
    name: "Sambrani Cups",
    img: "https://mangalbhawan.com/public/uploads/all/Qqfz1wTztcHWQCCsyQkIsIQeHxnBu75P1wqwlqig.png",
  },
  {
    name: "Camphor",
    img: "https://mangalbhawan.com/public/uploads/all/cT1wrDRj9he9QMR9iXcS9lY5AwNwWNTqjGNcWFEi.jpg",
  },
  {
    name: "Puja Kit",
    img: "https://mangalbhawan.com/public/uploads/all/v7rEOFAqbBBzEvwFRNPBT9s68XyZlRWcQ5TqUlzq.png",
  },
  {
    name: "Puja Accessories",
    img: "https://mangalbhawan.com/public/uploads/all/P2O5EvSUp1BuzxbLE03vi36psO96ZYnsW1qZB8tG.png",
  },
  {
    name: "Cow Dung Products",
    img: "https://mangalbhawan.com/public/uploads/all/v9J6fXFh9RLQ14swrIeSFegegJVCtHvLTKqFhzZ0.png",
  },
  {
    name: "Diyas",
    img: "https://mangalbhawan.com/public/uploads/all/MMltKiKeri7gUl0C329t1TqgIn8Bx6IXlfrjA4NQ.png",
  },
  {
    name: "Malas",
    img: "https://mangalbhawan.com/public/uploads/all/CP6lfjVH9jBsK4PUrAVCKe4wOKlKNcDsGZ53EFeI.png",
  },
  {
    name: "Festival Articles",
    img: "https://mangalbhawan.com/public/uploads/all/JS0ag6zW5txxFwtXCvsSFtsAKapcQK8ed4rTFKlu.png",
  },
  {
    name: "Diwali",
    img: "https://mangalbhawan.com/public/uploads/all/6HgLLh1CB9GRgWPNT5IwBIHDKx7ohK1GvrJfrXrL.jpg",
  },
  {
    name: "Daily Puja Needs",
    img: "https://mangalbhawan.com/public/uploads/all/fe4rKUdbK5DO1ZGkimGp77yuthfMpukqDtPsP2Lb.png",
  },
  {
    name: "Hawan Samagri",
    img: "https://mangalbhawan.com/public/uploads/all/JVz8IAvDm8pK5dj4dDAD4KUJT5ao49lsiVw6GU3M.png",
  },
  {
    name: "Pujas",
    img: "https://mangalbhawan.com/public/uploads/all/DLYJ94SqUQx5kSXLOke3EEtNnYzSJz1bzUp4N5DE.png",
  },
];

// Function to seed categories
const seedCategories = async () => {
  try {
    // Delete existing categories
    await Category.deleteMany();

    // Insert new categories
    await Category.insertMany(
      categories.map((category) => ({
        name: category.name,
        discription: "", // Empty description by default
        imgLink: category.img,
        active: true, // Active by default
      }))
    );

    console.log("Categories seeded successfully");
    mongoose.connection.close(); // Close the connection after seeding
  } catch (error) {
    console.error("Error seeding categories:", error);
    mongoose.connection.close(); // Close the connection in case of an error
  }
};

// seedCategories();

const astrologers = [
  {
    name: "Tarot Jaya",
    expertise: ["Tarot Reading"],
    language: ["Hindi", "English"],
    experience: 6,
    minRate: 30,
    discountedRate: 20,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/IMG-20240810-WA0008.jpg",
    rating: 5.0,
    ratingCount: 1,
    followers: 1,
    status: 1,
  },
  {
    name: "Acharya Nitesh",
    expertise: ["Muhurat", "Marriage Matching"],
    language: ["Hindi", "English"],
    experience: 6,
    minRate: 15,
    discountedRate: 10,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya-Nitesh-Tripathi-.jpg",
    rating: 5.0,
    ratingCount: 30,
    followers: 30,
    status: 1,
  },
  {
    name: "Acharya Palak",
    expertise: ["Muhurat", "Face Reading", "Crystal Healing"],
    language: ["Hindi"],
    experience: 12,
    minRate: 20,
    discountedRate: 9,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya%20Palaka.jpg",
    rating: 4.9,
    ratingCount: 94,
    followers: 13,
    status: 1,
  },
  {
    name: "Acharya Satyam",
    expertise: ["Muhurat", "Ravan Sahita", "Tajik"],
    language: ["Punjabi", "Gujarati", "Hindi"],
    experience: 10,
    minRate: 20,
    discountedRate: 11,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya-Satyam.jpg",
    rating: 5.0,
    ratingCount: 8,
    followers: 20,
    status: 1,
  },
  {
    name: "Jothidar Arun",
    expertise: ["Face Reading", "South Astrology"],
    language: ["Tamil", "English"],
    experience: 10,
    minRate: 40,
    discountedRate: 35,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya-Arun%20(1).jpg",
    rating: 0.0,
    ratingCount: 0,
    followers: 0,
    status: 1,
  },
  {
    name: "Acharya Ashtha",
    expertise: ["Vedic", "Vastu", "Ravan Sahita"],
    language: ["Hindi"],
    experience: 9,
    minRate: 18,
    discountedRate: 15,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya%20Aastha.jpg",
    rating: 5.0,
    ratingCount: 380,
    followers: 171,
    status: 1,
  },
  {
    name: "Acharya Shivam",
    expertise: ["Vedic"],
    language: ["Hindi"],
    experience: 18,
    minRate: 22,
    discountedRate: 15,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya%20Shivame.jpg",
    rating: 5.0,
    ratingCount: 121,
    followers: 150,
    status: 1,
  },
  {
    name: "Acharya Madhusudan",
    expertise: ["Muhurat", "Marriage Matching"],
    language: ["Hindi"],
    experience: 7,
    minRate: 20,
    discountedRate: 9,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya%20Madhusudane.jpg",
    rating: 5.0,
    ratingCount: 160,
    followers: 68,
    status: 1,
  },
  {
    name: "Acharya Dinanath",
    expertise: ["Marriage Matching", "Love Life"],
    language: ["Hindi"],
    experience: 12,
    minRate: 30,
    discountedRate: 9,
    imgLink:
      "https://astrology.mangalbhawan.com/public/images/Acharya%20Dinanath.jpeg",
    rating: 5.0,
    ratingCount: 73,
    followers: 2,
    status: 1,
  },
];

const seedAstrologers = async () => {
  try {
    await Astrologer.deleteMany();
    await Astrologer.insertMany(
      astrologers.map((astrologer) => ({ ...astrologer }))
    );
    console.log("astrologers seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding astrologers:", error);
    mongoose.connection.close();
  }
};
// seedAstrologers();
const banners = [
  {
    name: "ingredients",
    imgLink:
      "https://mangalbhawan.com/public/uploads/all/HzuB0VwXGfdmoZqwVlpRb521nlFvPj6MPqSO8L6G.jpg",
    active: true,
    sequenceNo: 1,
  },
  {
    name: "horroscope",
    imgLink:
      "https://mangalbhawan.com/public/uploads/all/fuYLyvGDXDt0H4IhXWB3gltXC7QB83szKvJv2jTO.jpg",
    active: true,
    sequenceNo: 2,
  },
  {
    name: "astrology-consultation",
    imgLink:
      "https://mangalbhawan.com/public/uploads/all/iuXG8G0sTJWtq7LGd9bHrU7b3MpYm6Bumd2Nn8qj.jpg",
    active: true,
    sequenceNo: 3,
  },
  {
    name: "pitruPaksha",
    imgLink:
      "https://mangalbhawan.com/public/uploads/all/uQ9nHrpfz6My9Chfi7Z6lxqqZLGNsH03YRoGmmBc.jpg",
    active: true,
    sequenceNo: 4,
  },
];

const seedbanners = async () => {
  try {
    await Banner.deleteMany();
    await Banner.insertMany(banners.map((banner) => ({ ...banner })));
    console.log("banners seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding banners:", error);
    mongoose.connection.close();
  }
};
seedbanners();
