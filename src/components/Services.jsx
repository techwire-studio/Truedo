import React from "react";
import serviceLogo from "../assets/serviveLogo.png";

const servicesData = [
  "Modular Furniture",
  "Kitchen Design",
  "Living Spaces",
  "Bedroom Interiors",
  "Office Solutions",
  "Bathroom Renovations",
];

const Services = () => {
  return (
    <div className="py-20 font-work">
      {/* ===== Top Section ===== */}
      <div className="flex items-center justify-between px-8">
        {/* Title */}
        <div className="flex items-center gap-1 font-bold lg:text-[40px]">
          <p className="text-[#202B1A]">Our</p>
          <img className="lg:h-[40px] lg:w-auto" src={serviceLogo} alt="logo" />
          <p className="text-[#202B1A]">Services</p>
        </div>

        {/* Button */}
        <button
          className="relative font-dm bg-[#CD8A38] text-white px-4 py-2 font-semibold tracking-wide transition-colors"
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
      <div className="mt-8 lg:text-[36px] font-bold px-8">
        {/* Split services into pairs (2 per row) */}
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
                  {/* Hover Background Image */}
                  <div className="absolute inset-0 bg-[url('src/assets/featured1.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-md"></div>

                  {/* Text + Arrow */}
                  <h4
                    className="relative z-10 flex gap-4 items-center font-semibold text-[#202B1A]
                    hover:text-[#FFFCF2] px-0 py-2 transition-all duration-500 ease-in-out
                    group-hover:px-10 group-hover:scale-105"
                  >
                    <span className="hidden group-hover:block transition-all duration-300 -rotate-45">
                      →
                    </span>
                    <span>{service}</span>
                  </h4>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
