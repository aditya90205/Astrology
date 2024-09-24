import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const backendUrl = import.meta.env.VITE_BACKENDURL;

const Banner = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 1, // One slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // 4-second interval between slides
    arrows: true, // Enable next/previous arrows
    pauseOnHover: true, // Pause on hover
  };
  const [banners, setBanners] = useState(null);
  const getAllBanners = async () => {
    try {
      console.log(backendUrl);
      const response = await axios.get(`${backendUrl}/api/banner/`);
      if (response?.status == 200) {
        setBanners(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBanners();
  }, []);
  return (
    <div className="w-full p-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-2">
      <Slider {...settings}>
        {banners?.map((banner) => (
          <div className="relative w-full h-full" key={banner._id}>
           <a href={`/${banner.name}`}> <img
              src={banner.imgLink}
              alt={banner.name}
              title={banner.name}
              className="w-full h-full object-cover"
            />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
