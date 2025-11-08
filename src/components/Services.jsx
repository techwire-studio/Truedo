import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/minimalist-kitchen-interior-design 3.png"
import serviceLogo from "../assets/serviceLogo1.png";
import serviceLogo2 from "../assets/servicelogo2.png"
import serviceLogo3 from "../assets/serviceLogo3.png"
import serviceLogo4 from "../assets/serviceLogo4.png";
import serviceLogo5 from "../assets/serviceLogo5.png"
import serviceLogo6 from "../assets/serviceLogo6.png"

const servicesData = [
  { name: "Modular Furniture", image: serviceLogo },
  { name: "Windows & Doors ", image: serviceLogo2 },
  { name: "Onsite Carpentry", image: serviceLogo3 },
  { name: "Curtains & Wallpapers", image: serviceLogo4 },
  { name: "Home Automation & Lighting", image: serviceLogo5 },
  { name: "Painting Services", image: serviceLogo },
];

const services = [
  { name: "Modular Furniture", image: serviceLogo },
  { name: "Windows & Doors", image: serviceLogo2 },
  { name: "Onsite Carpentry", image: serviceLogo3 },
  { name: "Curtains & Wallpapers", image: serviceLogo4 },
  { name: "Home Automation & Lighting", image: serviceLogo5 },
  { name: "Painting Services", image: serviceLogo6 },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="lg:py-20 py-10 font-work lg:px-8"
    >
      {/* ===== Top Section ===== */}
      <div className="flex items-center justify-between px-6 lg:px-8">
        {/* Title */}
        <motion.div
          variants={fadeIn}
          className="flex items-center gap-1 font-bold text-[26px] lg:text-[40px]"
        >
          
          <motion.img
            initial={{ rotate: -20, opacity: 0, scale: 0.6 }}
            whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="lg:h-[40px] h-[20px] lg:w-auto"
            src={logo}
            alt="logo"
          />
          <p className="text-[#202B1A]">Our</p>
          <p className="text-[#202B1A]">Services</p>
        </motion.div>

        {/* Button */}
        <Link to="/our-services">
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
          className="relative font-dm bg-[#CD8A38] text-white text-[12px] lg:text-[18px] px-4 py-2 font-semibold tracking-normal transition-colors"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
          }}
        >
          VIEW ALL
          <motion.span
            // animate={{ x: [0, 6, 0] }}
            // transition={{ duration: 1.4, repeat: Infinity }}
            className="ml-2 inline-block -rotate-45"
          >
            →
          </motion.span>
        </motion.button>
        </Link>
      </div>

      {/* ===== Services List (Desktop) ===== */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="hidden lg:block mt-8 lg:text-[36px] font-bold px-8"
      >
        {Array.from({ length: servicesData.length / 2 }).map((_, rowIndex) => {
          const leftService = servicesData[rowIndex * 2];
          const rightService = servicesData[rowIndex * 2 + 1];

          return (
            <motion.div
              key={rowIndex}
              variants={fadeIn}
              className="flex justify-between border-b border-black/25 py-2"
            >
              {[leftService, rightService].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative inline-block group cursor-pointer overflow-hidden rounded-[20px]"
                >
                  {/* BG Image */}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></motion.div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-40 transition-opacity duration-500 rounded-[20px]"></div>

                  {/* Text / Arrow */}
                  <h4
                    className="relative z-10 flex gap-4 items-center font-semibold text-[#202B1A]
                  hover:text-[#FFFCF2] px-0 py-2 transition-all duration-500 ease-in-out
                  group-hover:px-10 group-hover:scale-105"
                  >
                    {/* Arrow */}
                    {/* <motion.svg
                      initial={{ opacity: 0, x: -20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-8 hidden group-hover:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </motion.svg> */}

                    <span>{service.name}</span>
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </motion.div>

      {/* ===== Mobile List ===== */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="lg:hidden px-6 mt-6"
      >
        {services.map((service, index) => (
          <motion.div
            variants={fadeIn}
            key={index}
            className="flex items-center gap-4 py-4 border-b border-black/25"
          >
            <motion.img
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6 }}
              className="h-[50px] w-[70px] rounded-[10px]"
              src={service.image}
              alt=""
            />
            <p className="font-work font-semibold text-[22px]">
              {service.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
