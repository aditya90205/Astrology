import mongoose from "mongoose";
import Category from "./models/sp_category_master.js"; // Adjust the path accordingly
import dotenv from "dotenv";
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

seedCategories();
