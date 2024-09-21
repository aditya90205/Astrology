import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopAstrologer = () => {
  const [astrologers, setAstrologers] = useState([]);

  // Fetch all astrologers from backend API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/astrologer/") // Adjust API endpoint if needed
      .then((response) => {
        console.log(response.data);

        setAstrologers(response.data); // Set fetched astrologers data
      })
      .catch((error) => {
        console.error("Error fetching astrologers: ", error);
      });
  }, []);

  // Slick carousel settings
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 4, // Number of cards to show at once
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000, // Automatically move slides every 4 seconds
  //     arrows: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };
  // Custom Arrow components for navigation
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className={className}
        style={{
          ...style,
          display: "block",
          left: "10px", // Adjust the position
          zIndex: 1,
          color: "black",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowRight
        className={className}
        style={{
          ...style,
          display: "block",
          right: "10px", // Adjust the position
          zIndex: 1,
          color: "black",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at once
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Use custom left arrow
    nextArrow: <CustomNextArrow />, // Use custom right arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="w-full my-8">
    //   <h2 className="text-xl font-bold mb-4">Expert Astrologers</h2>
    //   {astrologers.length > 0 ? (
    //     <Slider {...settings}>
    //       {astrologers?.map((astrologer) => (
    //         <div key={astrologer._id} className="p-4">
    //           <div className="border rounded-lg p-4 text-center shadow-md">
    //             <img
    //               src={astrologer.imgLink} // Use imgLink from the model
    //               alt={astrologer.name}
    //               className="w-32 h-32 rounded-full mx-auto object-cover"
    //             />
    //             <h3 className="text-lg font-semibold mt-4">
    //               {astrologer.name}
    //             </h3>
    //             <div className="flex items-center justify-center mt-2">
    //               {Array.from({ length: 5 }).map((_, index) => (
    //                 <span key={index}>
    //                   {index < astrologer.rating ? "★" : "☆"}{" "}
    //                   {/* Display stars based on rating */}
    //                 </span>
    //               ))}
    //               <span className="ml-2">({astrologer.rating})</span>
    //             </div>
    //             <p className="text-sm text-gray-500 mt-2">
    //               {astrologer.experience} years of experience
    //             </p>
    //             <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
    //               View Profile
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   ) : (
    //     <p>Loading astrologers...</p>
    //   )}
    // </div>
    <div className="w-full my-8 p-5">
      <div className="m-auto">
        <h2 className="text-xl font-bold mb-4 ">Expert Astrologers</h2>
      </div>
      {astrologers.length > 0 ? (
        <Slider {...settings}>
          {astrologers.map((astrologer) => (
            <div key={astrologer._id} className="pz-4">
              <div className="border rounded-lg p-4 text-center shadow-md">
                <img
                  src={astrologer.imgLink} // Use imgLink from the model
                  alt={astrologer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">
                  {astrologer.name}
                </h3>
                <div className="flex items-center justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                      {index < astrologer.rating ? "★" : "☆"}{" "}
                      {/* Display stars based on rating */}
                    </span>
                  ))}
                  <span className="ml-2">({astrologer.rating})</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {astrologer.experience} years of experience
                </p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading astrologers...</p>
      )}
    </div>
  );
};

export default TopAstrologer;
