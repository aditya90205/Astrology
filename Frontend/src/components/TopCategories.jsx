import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  const handleCategoryClick = (categoryName) => {
    const formattedCategoryName = categoryName
      .toLowerCase()
      .replace(/\s+/g, "-"); // Converts the category name to a slug format
    const url = `https://6aaccc-e0.myshopify.com/collections/${formattedCategoryName}`;
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories/");
      console.log(response);
      
      const data = await response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Top Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories?.map((category, index) => (
         index >= 9 ? (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.imgLink}
                alt={category.name}
                className="w-16 h-16 object-cover mb-2"
              />
              <h3 className="text-center text-sm font-medium">{category.name}</h3>
            </div>
          ) : null
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300" to={'/all-categories'} >
          View All Categories
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
