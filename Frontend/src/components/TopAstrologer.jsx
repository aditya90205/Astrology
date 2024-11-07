import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const backendUrl = import.meta.env.VITE_BACKENDURL;

const TopAstrologer = () => {
  const [astrologers, setAstrologers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    birthPlace: ''
  });
  const isUserLoggedIn = () => {
    // Replace with actual login check logic
    return localStorage.getItem("authToken") !== null;
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    console.log("Popup toggled:", isPopupOpen); // Debugging line
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    setIsPopupOpen(false);
    try {
      const authToken = localStorage.getItem("authToken");
      const userId = localStorage.getItem("userId");  // Retrieve userId from localStorage
  
      if (!userId) {
        toast.error("User not logged in");
        return;
      }
      
      console.log(`Sending request to: ${backendUrl}/api/user/updateProfile/${userId}`);

      const response = await axios.put(
        `${backendUrl}/api/user/updateProfile/${userId}`, 
        userDetails, 
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );
  
      if (response.status === 200) {
        toast.success("Details updated successfully!");
        setIsPopupOpen(false);
      } else {
        toast.error("Failed to update details.");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  
  
  
  
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/astrologer/`)
      .then((response) => {
        setAstrologers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching astrologers: ", error);
      });
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className={className}
        style={{ ...style, display: "block", left: "10px", zIndex: 1, color: "black", fontSize: "24px", cursor: "pointer" }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowRight
        className={className}
        style={{ ...style, display: "block", right: "10px", zIndex: 1, color: "black", fontSize: "24px", cursor: "pointer" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleCallClick = () => {
    if (isUserLoggedIn()) {
      if (isPopupOpen) {
        handleSubmit(); // Update user details when the popup is open
      } else {
        togglePopup(); // Open the popup if it's not already open
      }
    } else {
      toast.warning("Please log in to place a call.");
    }
  };
  

  return (
    <div className="w-full my-8 p-5">
      <div className="m-auto">
        <h2 className="text-xl font-bold mb-4 ">Expert Astrologers</h2>
      </div>
      <ToastContainer />
      
{/* Popup Component */}
{isPopupOpen && (
  <div 
    style={{
      position: "fixed", top: "0", left: "0", width: "100%", height: "100%", 
      backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", 
      justifyContent: "center", zIndex: "1000"
    }}
  >
    <div 
      style={{
        width: "400px", padding: "20px", backgroundColor: "white", 
        borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
     
      
      <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input 
          type="text" 
          name="gender" 
          placeholder="Gender" 
          value={userDetails.gender}
          onChange={handleInputChange} 
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => e.target.style.border = "1px solid #007bff"}
          onBlur={(e) => e.target.style.border = "1px solid #ddd"}
        />
        
        <input 
          type="date" 
          name="dateOfBirth" 
          placeholder="Date of Birth" 
          value={userDetails.dateOfBirth}
          onChange={handleInputChange} 
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => e.target.style.border = "1px solid #007bff"}
          onBlur={(e) => e.target.style.border = "1px solid #ddd"}
        />
        
        <input 
          type="time" 
          name="timeOfBirth" 
          placeholder="Time of Birth" 
          value={userDetails.timeOfBirth}
          onChange={handleInputChange} 
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => e.target.style.border = "1px solid #007bff"}
          onBlur={(e) => e.target.style.border = "1px solid #ddd"}
        />
        
        <input 
          type="text" 
          name="birthPlace" 
          placeholder="Birth Place" 
          value={userDetails.birthPlace}
          onChange={handleInputChange} 
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => e.target.style.border = "1px solid #007bff"}
          onBlur={(e) => e.target.style.border = "1px solid #ddd"}
        />

        <button 
          type="button" 
          onClick={handleSubmit} 
          style={{
            padding: "10px 20px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          Call
        </button>
      </form>

      <button 
        onClick={togglePopup} 
        style={{ 
          marginTop: "20px", padding: "10px 20px", 
          backgroundColor: "#dc3545", color: "white", 
          border: "none", borderRadius: "5px", 
          cursor: "pointer", transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#c82333"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}
      >
        Close
      </button>
    </div>
  </div>
)}

      
      {astrologers.length > 0 ? (
        <Slider {...settings}>
          {astrologers.map((astrologer) => (
            <div key={astrologer._id} className="pz-4">
              <div className="border rounded-lg p-4 text-center shadow-md">
                <img
                  src={astrologer.imgLink}
                  alt={astrologer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{astrologer.name}</h3>
                <div className="flex items-center justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                      {index < astrologer.rating ? "★" : "☆"}
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
                <button
                  onClick={handleCallClick}
                  className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Call
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
