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

const Team = () => {
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
        className=" "
      >
        <SwiperSlide>
         <img src="/public/image/member1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src="/public/image/member2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src="/public/image/member3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src="/public/image/member3.jpg" alt="" />
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
};

export default Team;
