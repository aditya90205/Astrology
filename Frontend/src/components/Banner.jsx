import Slider from "react-slick";

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

  return (
    <div className="w-full p-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-2">
      <Slider {...settings}>
        {/* First Slide */}
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

        {/* Second Slide */}
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

        {/* Third Slide */}
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

        {/* Fourth Slide */}
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
      </Slider>
    </div>
  );
};

export default Banner;
