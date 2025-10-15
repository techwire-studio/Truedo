import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import board from "../assets/board.png";

export default function WhyUs() {
  return (
    <div className="h-screen py-10 font-work">
      <div className="bg-[#CD8B3B] h-full rounded-[51px] px-16 py-16 overflow-hidden">
        {/* Header */}
        <div className="flex gap-4 mb-8">
          <div className="text-[#FFFCF2] w-[90%]">
            <h2 className="lg:text-[40px] font-work font-semibold">Why Us</h2>
            <p className="font-work lg:text-[22px] leading-6">
              We craft bespoke interiors with premium materials, expert craftsmanship,
              and end-to-end solutions. Our focus is on elegance, functionality, and
              creating spaces that truly reflect your lifestyle.
            </p>
          </div>
        </div>

        {/* Horizontal Infinite Auto Scroll Swiper */}
        <div className="w-full h-[70%] font-work">
          <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            slidesPerView={3}
            spaceBetween={30}
            loop={true} // infinite loop
            autoplay={{
              delay: 0, // continuous movement
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={5000} // smooth scroll speed (higher = slower)
            className="h-full"
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-4 justify-center items-center rounded-[15.01px] bg-[#FFFCF2] text-black h-full px-8">
                  <div className="rounded-full h-32 w-32 bg-[#CD8B3B] flex justify-center items-center">
                    <img className="h-[80px] w-auto" src={board} alt="icon" />
                  </div>
                  <h4 className="text-black lg:text-[28px] font-medium">
                    EASY EMI’s
                  </h4>
                  <p className="text-center text-[#737373] font-medium lg:text-[16px]">
                    Lets you repay big purchases in small, fixed monthly amounts,
                    making expenses easier to manage.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
