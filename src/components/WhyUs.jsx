import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

import board from "../assets/board.png";
import coin from "../assets/coin-bag-line.png";
import cart from "../assets/cart.png";
import delivery from "../assets/delivery.png";
import tick from "../assets/tick.png";
import price from "../assets/pricetags-outline.png";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function WhyUs() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="pt-10 font-work px-6 lg:px-8"
    >
      <motion.div
        variants={fadeInUp}
        className="bg-[#CD8B3B] h-full rounded-[21px] px-4 py-4 lg:rounded-[51px] lg:px-16 lg:py-10 overflow-hidden"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-4 mb-8"
        >
          <div className="text-[#FFFCF2] w-[90%]">
            <h2 className="lg:text-[40px] text-[28px] font-work font-semibold">
              Why Us
            </h2>
            <p className="font-work lg:text-[22px] text-[16px] leading-6">
              We craft bespoke interiors with premium materials, expert
              craftsmanship, and end-to-end solutions. Our focus is on elegance,
              functionality, and creating spaces that truly reflect your
              lifestyle.
            </p>
          </div>
        </motion.div>

        {/* Swiper */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full h-[380px] font-work"
        >
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
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col gap-4 py-8 items-center rounded-[15.01px] bg-[#FFFCF2] text-black h-full px-8 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)]"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="rounded-full h-20 w-20 lg:h-28 lg:w-28 bg-[#CD8B3B] flex justify-center items-center"
                  >
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="lg:h-[50px] lg:w-[50px] h-[40px] w-auto"
                      src={slide.icon}
                      alt={slide.title}
                    />
                  </motion.div>

                  <motion.h4
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="text-black text-[24px] lg:text-[24px] font-work font-medium text-center uppercase leading-[26.3px] mt-2 lg:mt-4"
                  >
                    {slide.title}
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="text-center text-[16px] text-[#737373] font-work font-medium lg:text-[16px] leading-[26px] mt-2"
                  >
                    {slide.desc}
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
