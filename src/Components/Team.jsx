/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Team = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <p className="md:text-2xl lg:text-3xl font-bold mb-8">
        Discover the Faces Behind Our Success
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img className="w-full" src="/public/image/member1.jpg" alt="" />
          </div>
          <div>
            <img className="w-full" src="/public/image/member2.jpg" alt="" />
          </div>
          <div>
            <img className="w-full" src="/public/image/member3.jpg" alt="" />
          </div>
          <div>
            <img className="w-full" src="/public/image/member2.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Team;
