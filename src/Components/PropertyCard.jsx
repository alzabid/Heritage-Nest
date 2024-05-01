/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}


const PropertyCard = () => {
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
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
    <div className="slider-container mt-6 px-4 lg:px-0">
      <Slider {...settings}>
        {/* 1 */}
        <div className=" bg-gray-50 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              className="object-cover object-center  w-full h-56"
              src="/image/Property2.jpg"
              alt="image"
            />
            <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
              <div>
                <img src="/icon/gallery.png" alt="" />
              </div>
              <p className="text-sm md:text-base">20</p>
            </button>
          </div>

          <div className=" relative px-6 py-4">
            <div className=" flex gap-2 justify-between pb-3">
              <p className="bg-blue-100 px-2 py-1 text-sm">Apartment</p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img src="/icon/rectangle.png" alt="" />
                </span>
                <p className="text-sm md:text-base font-semibold">
                  Ready to Move
                </p>
              </div>
            </div>
            <hr className="border" />
            <div className="space-y-1 md:space-y-3">
              <p className="text-xl font-semibold pt-2">
                Sunny Slope Suites
              </p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img
                    className="w-3 md:w-4"
                    src="/icon/location.png"
                    alt=""
                  />
                </span>
                <p className="text-sm md:text-base text-gray-500">
                  Meadowshire Park, Greenfield, USA
                </p>
              </div>
              <p className=" text-lg  md:text-xl lg:text-2xl font-bold">
                $ 250000
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" bg-gray-50 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              className="object-cover object-center  w-full h-56"
              src="/image/Property1.jpg"
              alt="image"
            />
            <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
              <div>
                <img src="/icon/gallery.png" alt="" />
              </div>
              <p className="text-sm md:text-base">20</p>
            </button>
          </div>

          <div className=" relative px-6 py-4">
            <div className=" flex gap-2 justify-between pb-3">
              <p className="bg-blue-100 px-2 py-1 text-sm">Apartment</p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img src="/icon/rectangle.png" alt="" />
                </span>
                <p className="text-sm md:text-base font-semibold">
                  Ready to Move
                </p>
              </div>
            </div>
            <hr className="border" />
            <div className="space-y-1 md:space-y-3">
              <p className="text-xl font-semibold pt-2">
                Sunny Slope Suites
              </p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img
                    className="w-3 md:w-4"
                    src="/icon/location.png"
                    alt=""
                  />
                </span>
                <p className="text-sm md:text-base text-gray-500">
                  Meadowshire Park, Greenfield, USA
                </p>
              </div>
              <p className=" text-lg  md:text-xl lg:text-2xl font-bold">
                $ 250000
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" bg-gray-50 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              className="object-cover object-center  w-full h-56"
              src="/image/Property3.jpg"
              alt="image"
            />
            <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
              <div>
                <img src="/icon/gallery.png" alt="" />
              </div>
              <p className="text-sm md:text-base">20</p>
            </button>
          </div>

          <div className=" relative px-6 py-4">
            <div className=" flex gap-2 justify-between pb-3">
              <p className="bg-blue-100 px-2 py-1 text-sm">Apartment</p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img src="/icon/rectangle.png" alt="" />
                </span>
                <p className="text-sm md:text-base font-semibold">
                  Ready to Move
                </p>
              </div>
            </div>
            <hr className="border" />
            <div className="space-y-1 md:space-y-3">
              <p className="text-xl font-semibold pt-2">
                Sunny Slope Suites
              </p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img
                    className="w-3 md:w-4"
                    src="/icon/location.png"
                    alt=""
                  />
                </span>
                <p className="text-sm md:text-base text-gray-500">
                  Meadowshire Park, Greenfield, USA
                </p>
              </div>
              <p className=" text-lg  md:text-xl lg:text-2xl font-bold">
                $ 250000
              </p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className=" bg-gray-50 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              className="object-cover object-center  w-full h-56"
              src="/image/Property2.jpg"
              alt="image"
            />
            <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
              <div>
                <img src="/icon/gallery.png" alt="" />
              </div>
              <p className="text-sm md:text-base">20</p>
            </button>
          </div>

          <div className=" relative px-6 py-4">
            <div className=" flex gap-2 justify-between pb-3">
              <p className="bg-blue-100 px-2 py-1 text-sm">Apartment</p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img src="/icon/rectangle.png" alt="" />
                </span>
                <p className="text-sm md:text-base font-semibold">
                  Ready to Move
                </p>
              </div>
            </div>
            <hr className="border" />
            <div className="space-y-1 md:space-y-3">
              <p className="text-xl font-semibold pt-2">
                Sunny Slope Suites
              </p>
              <div className=" flex gap-2 items-center">
                <span>
                  <img
                    className="w-3 md:w-4"
                    src="/icon/location.png"
                    alt=""
                  />
                </span>
                <p className="text-sm md:text-base text-gray-500">
                  Meadowshire Park, Greenfield, USA
                </p>
              </div>
              <p className=" text-lg  md:text-xl lg:text-2xl font-bold">
                $ 250000
              </p>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default PropertyCard;
