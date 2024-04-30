import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

const PropertyCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={65}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
        className="mt-6"
      >
        <SwiperSlide>
          <div className=" bg-gray-50 max-w-sm overflow-hidden rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center  w-full h-56"
                src="/public/image/Property1.jpg"
                alt="image"
              />
              <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
                <div>
                  <img src="/public/icon/gallery.png" alt="" />
                </div>
                <p>20</p>
              </button>
            </div>

            <div className=" relative px-6 py-4">
              <div className=" flex gap-2 justify-between pb-2">
                <p className="bg-blue-100 px-2 py-1 text-sm rounded-lg">
                  Apartment
                </p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/rectangle.png" alt="" />
                  </span>
                  <p className="font-semibold">Ready to Move</p>
                </div>
              </div>
              <hr className="border" />
              <div className="space-y-3">
               
                <p className="text-xl font-semibold pt-2">Sunny Slope Suites</p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/location.png" alt="" />
                  </span>
                  <p className="text-gray-500">
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
                <p className="text-2xl font-bold">$ 250000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-50 max-w-sm overflow-hidden rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center  w-full h-56"
                src="/public/image/Property2.jpg"
                alt="image"
              />
              <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
                <div>
                  <img src="/public/icon/gallery.png" alt="" />
                </div>
                <p>20</p>
              </button>
            </div>

            <div className=" relative px-6 py-4">
              <div className=" flex gap-2 justify-between pb-2">
                <p className="bg-blue-100 px-2 py-1 text-sm rounded-lg">
                  Apartment
                </p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/rectangle.png" alt="" />
                  </span>
                  <p className="font-semibold">Ready to Move</p>
                </div>
              </div>
              <hr className="border" />
              <div className="space-y-3">
               
                <p className="text-xl font-semibold pt-2">Sunny Slope Suites</p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/location.png" alt="" />
                  </span>
                  <p className="text-gray-500">
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
                <p className="text-2xl font-bold">$ 250000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-50 max-w-sm overflow-hidden rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center  w-full h-56"
                src="/public/image/Property3.jpg"
                alt="image"
              />
              <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
                <div>
                  <img src="/public/icon/gallery.png" alt="" />
                </div>
                <p>20</p>
              </button>
            </div>

            <div className=" relative px-6 py-4">
              <div className=" flex gap-2 justify-between pb-2">
                <p className="bg-blue-100 px-2 py-1 text-sm rounded-lg">
                  Apartment
                </p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/rectangle.png" alt="" />
                  </span>
                  <p className="font-semibold">Ready to Move</p>
                </div>
              </div>
              <hr className="border" />
              <div className="space-y-3">
               
                <p className="text-xl font-semibold pt-2">Sunny Slope Suites</p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/location.png" alt="" />
                  </span>
                  <p className="text-gray-500">
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
                <p className="text-2xl font-bold">$ 250000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-50 max-w-sm overflow-hidden rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center  w-full h-56"
                src="/public/image/Property2.jpg"
                alt="image"
              />
              <button className=" absolute bottom-4 left-4 flex justify-center items-center gap-2 bg-white px-2 py-1 text-sm rounded-lg ">
                <div>
                  <img src="/public/icon/gallery.png" alt="" />
                </div>
                <p>20</p>
              </button>
            </div>

            <div className=" relative px-6 py-4">
              <div className=" flex gap-2 justify-between pb-2">
                <p className="bg-blue-100 px-2 py-1 text-sm rounded-lg">
                  Apartment
                </p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/rectangle.png" alt="" />
                  </span>
                  <p className="font-semibold">Ready to Move</p>
                </div>
              </div>
              <hr className="border" />
              <div className="space-y-3">
               
                <p className="text-xl font-semibold pt-2">Sunny Slope Suites</p>
                <div className=" flex gap-2 items-center">
                  <span>
                    <img src="/public/icon/location.png" alt="" />
                  </span>
                  <p className="text-gray-500">
                    Meadowshire Park, Greenfield, USA
                  </p>
                </div>
                <p className="text-2xl font-bold">$ 250000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PropertyCard;
