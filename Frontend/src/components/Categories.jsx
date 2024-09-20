// Array of category data
const categories = [
  {
    name: "Agarbatti",
    img: "https://mangalbhawan.com/public/uploads/all/koMeQgkJKwol56S5C7FQOse0EP7ZigRekCCd0PAi.png",
  },
  { name: "Dry Dhoop Cones", img: "/path/to/dry-dhoop-cones.png" },
  { name: "Dhoop Sticks", img: "/path/to/dhoop-sticks.png" },
  { name: "Sambrani Cups", img: "/path/to/sambrani-cups.png" },
  { name: "Camphor", img: "/path/to/camphor.png" },
  { name: "Puja Kit", img: "/path/to/puja-kit.png" },
  { name: "Puja Accessories", img: "/path/to/puja-accessories.png" },
  { name: "Cow Dung Products", img: "/path/to/cow-dung-products.png" },
  { name: "Diyas", img: "/path/to/diyas.png" },
  { name: "Malas", img: "/path/to/malas.png" },
  { name: "Festival Articles", img: "/path/to/festival-articles.png" },
  { name: "Diwali", img: "/path/to/diwali.png" },
  { name: "Daily Puja Needs", img: "/path/to/daily-puja-needs.png" },
  { name: "Hawan Samagri", img: "/path/to/hawan-samagri.png" },
  { name: "Pujas", img: "/path/to/pujas.png" },
];

const Categories = () => {
  const handleCategoryClick = (categoryName) => {
    const formattedCategoryName = categoryName
      .toLowerCase()
      .replace(/\s+/g, "-"); // Converts the category name to a slug format
    const url = `https://6aaccc-e0.myshopify.com/collections/${formattedCategoryName}`;
    window.open(url, "_blank"); // Opens the URL in a new tab
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Top Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-16 h-16 object-cover mb-2"
            />
            <h3 className="text-center text-sm font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300">
          View All Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;
