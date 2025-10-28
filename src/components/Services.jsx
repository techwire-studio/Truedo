import React from "react";
import { motion } from "framer-motion";

import serviceLogo from "../assets/serviveLogo.png";

const servicesData = [
  { name: "Modular Furniture", image: serviceLogo },
  { name: "Kitchen Design", image: serviceLogo },
  { name: "Living Spaces", image: serviceLogo },
  { name: "Bedroom Interiors", image: serviceLogo },
  { name: "Office Solutions", image: serviceLogo },
  { name: "Bathroom Renovations", image: serviceLogo },
];

const services = [
  { name: "Modular Furniture", image: serviceLogo },
  { name: "Kitchen Design", image: serviceLogo },
  { name: "Living Spaces", image: serviceLogo },
  { name: "Bedroom Interiors", image: serviceLogo },
  { name: "Office Solutions", image: serviceLogo },
  { name: "Bathroom Renovations", image: serviceLogo },
];

const Services = () => {
  return (
    <div className="lg:py-20 py-10 font-work lg:px-8">
      {/* ===== Top Section ===== */}
      <div className="flex items-center justify-between px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center gap-1 font-bold text-[28px] lg:text-[40px]">
          <p className="text-[#202B1A]">Our</p>
          <img
            className="lg:h-[40px] h-[20px] lg:w-auto"
            src={serviceLogo}
            alt="logo"
          />
          <p className="text-[#202B1A]">Services</p>
        </div>

        {/* Button */}
        <button
          className="relative font-dm bg-[#CD8A38] text-white text-[12px] lg:text-[18px] px-4 py-2 font-semibold tracking-wide transition-colors"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
          }}
        >
          VIEW ALL
          <span className="ml-2 inline-block -rotate-45">→</span>
        </button>
      </div>

      {/* ===== Services List ===== */}
      <div className="hidden lg:block mt-8 lg:text-[36px] font-bold px-8">
        {/* Split into pairs */}
        {Array.from({ length: servicesData.length / 2 }).map((_, rowIndex) => {
          const leftService = servicesData[rowIndex * 2];
          const rightService = servicesData[rowIndex * 2 + 1];

          return (
            <div
              key={rowIndex}
              className="flex justify-between border-b border-black/25 py-2"
            >
              {[leftService, rightService].map((service, i) => (
                <div
                  key={i}
                  className="relative inline-block group cursor-pointer overflow-hidden"
                >
                  {/* Background Image (each unique) */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-[20px]"></div>

                  {/* Text + Animated Arrow */}
                  <h4
                    className="relative z-10 flex gap-4 items-center font-semibold text-[#202B1A]
                  hover:text-[#FFFCF2] px-0 py-2 transition-all duration-500 ease-in-out
                  group-hover:px-10 group-hover:scale-105"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-8 hidden group-hover:block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </motion.svg>

                    <span>{service.name}</span>
                  </h4>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {/* Service List Mobile */}
      <div className="lg:hidden px-6 mt-6">
        {services.map((service, index) => (
          <div
            className="flex items-center gap-4 py-4 border-b border-black/25"
            key={index}
          >
            <img className="h-[50px] w-[60px]" src={service.image} alt="" />
            <p className="font-work font-semibold text-[22px]">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
