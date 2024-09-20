import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-8">
      <Swiper
        spaceBetween={0} // No gap between slides
        slidesPerView={1} // Only 1 image at a time (full-width)
        loop={true} // Infinite loop
        navigation={true} // Show navigation (next/prev buttons)
        pagination={{ clickable: true }} // Optional: add pagination dots
        autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto slide every 4 seconds
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://mangalbhawan.com/public/uploads/all/HzuB0VwXGfdmoZqwVlpRb521nlFvPj6MPqSO8L6G.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-lg font-semibold">Slide 1 Title</h2>
              <p>Slide 1 description goes here.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://mangalbhawan.com/public/uploads/all/fuYLyvGDXDt0H4IhXWB3gltXC7QB83szKvJv2jTO.jpg"
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-lg font-semibold">Slide 2 Title</h2>
              <p>Slide 2 description goes here.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://mangalbhawan.com/public/uploads/all/iuXG8G0sTJWtq7LGd9bHrU7b3MpYm6Bumd2Nn8qj.jpg"
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-lg font-semibold">Slide 3 Title</h2>
              <p>Slide 3 description goes here.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://mangalbhawan.com/public/uploads/all/uQ9nHrpfz6My9Chfi7Z6lxqqZLGNsH03YRoGmmBc.jpg"
              alt="Banner 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-lg font-semibold">Slide 4 Title</h2>
              <p>Slide 4 description goes here.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
