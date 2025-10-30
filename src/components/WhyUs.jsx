import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import board from "../assets/board.png";
import coin from "../assets/coin-bag-line.png"
import cart from "../assets/cart.png"
import delivery from "../assets/delivery.png"
import tick from "../assets/tick.png"
import price from "../assets/pricetags-outline.png"

const slidesData = [
  {
    id: 1,
    title: "Flexible Payment Options",
    desc: "Easy EMIs designed to make your dream home achievable without stress.",
    icon: board,
  },
  {
    id: 2,
    title: "Transparent Pricing",
    desc: "No hidden costs — full clarity at every stage of your project.",
    icon: coin,
  },
  {
    id: 3,
    title: "Factory finished products",
    desc: "Crafted with precision in controlled environments for flawless finish, lasting durability, -every Truedo product reflects consistency & perfection.",
    icon: cart,
  },
  {
    id: 4,
    title: "On-Time Delivery",
    desc: "We respect your schedule, ensuring timely handover without compromising quality.",
    icon: delivery,
  },
  {
    id: 5,
    title: "Guaranteed Quality & Warranty",
    desc: "All work and materials come with reliable warranties, so your interiors stand the test of time.",
    icon: tick,
  },
  {
    id: 6,
    title: "Price match guaraNtee",
    desc: "Price match to a valid quote in comparison with a branded player and for exact scope.",
    icon: price,
  },
];

export default function WhyUs() {
  return (
    <div className="py-10 font-work px-6 lg:px-8">
      <div className="bg-[#CD8B3B] h-full rounded-[21px] px-4 py-4 lg:rounded-[51px] lg:px-16 lg:py-16 overflow-hidden">
        {/* Header */}
        <div className="flex gap-4 mb-8">
          <div className="text-[#FFFCF2] w-[90%]">
            <h2 className="lg:text-[40px] text-[28px] font-work font-semibold">Why Us</h2>
            <p className="font-work lg:text-[22px] text-[16px] leading-6">
              We craft bespoke interiors with premium materials, expert
              craftsmanship, and end-to-end solutions. Our focus is on elegance,
              functionality, and creating spaces that truly reflect your
              lifestyle.
            </p>
          </div>
        </div>

        {/* Horizontal Infinite Auto Scroll Swiper */}
        <div className="w-full h-[400px] font-work">
          <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={2500}
            className="h-full rounded-[15.01px]"
            breakpoints={{
              0: { slidesPerView: 1 }, 
              640: { slidesPerView: 2 }, 
              1024: { slidesPerView: 3 }, 
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col gap-4 py-8 items-center rounded-[15.01px] bg-[#FFFCF2] text-black h-full px-8">
                  <div className="rounded-full h-20 w-20 lg:h-32 lg:w-32 bg-[#CD8B3B] flex justify-center items-center">
                    <img
                      className="lg:h-[60px] lg:w-[60px] h-[40px]  w-auto"
                      src={slide.icon}
                      alt={slide.title}
                    />
                  </div>
                  <h4 className="text-black text-[24px] lg:text-[28px] font-work font-medium text-center uppercase leading-[26.3px] mt-2 lg:mt-4">
                    {slide.title}
                  </h4>
                  <p className="text-center text-[16px] text-[#737373] font-work font-medium lg:text-[16px] leading-[26px] mt-2">
                    {slide.desc}
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
