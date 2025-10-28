import React from "react";

import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";
import img5 from "../assets/service5.png";
import img6 from "../assets/service6.png";
import Arrow1 from "../assets/serviceArrow.png";
import Arrow2 from "../assets/serviceArrrow2.png";

const services = [
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img1,
  },
  {
    heading: "Kitchen Design",
    content:
      "Transform your cooking space into a masterpiece of functionality and style.",
    img: img2,
  },
  {
    heading: "Living Spaces",
    content:
      "Create comfortable and inviting areas perfect for relaxation and entertainment.",
    img: img3,
  },
  {
    heading: "Bedroom Interiors",
    content:
      "Design your personal sanctuary with elegant and peaceful bedroom solutions.",
    img: img4,
  },
  {
    heading: "Office Solutions",
    content:
      "Boost productivity with thoughtfully designed workspace environments.",
    img: img5,
  },
  // {
  //   heading: "Bathroom Renovations",
  //   content:
  //     "Luxurious bathroom designs that combine comfort with contemporary aesthetics.",
  //   img: img6,
  // },
];
const services2 = [
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img1,
  },
  {
    heading: "Kitchen Design",
    content:
      "Transform your cooking space into a masterpiece of functionality and style.",
    img: img2,
  },
  {
    heading: "Living Spaces",
    content:
      "Create comfortable and inviting areas perfect for relaxation and entertainment.",
    img: img3,
  },
  {
    heading: "Bedroom Interiors",
    content:
      "Design your personal sanctuary with elegant and peaceful bedroom solutions.",
    img: img4,
  },
];

const Services = () => {
  return (
    <div className="w-full font-helvetica lg:px-8 px-6">
      {/* Top Content */}
      <div className="w-full lg:pt-40 lg:mb-20 pt-24 lg:py-0">
        <div className="flex items-start justify-between flex-wrap gap-8">
          <div className="text-[#202B1A] font-bold text-4xl lg:text-5xl flex items-center gap-2">
            <p>OUR</p>
            <div className="h-12 w-14 bg-[#CD8A38] rounded-lg"></div>
            <p>SERVICES</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-[#202B1A] text-lg lg:text-xl leading-relaxed">
              A creative team crafting interiors that blend beauty and function.
              From kitchens to full renovations, we design spaces that reflect
              your lifestyle with elegance and ease.
            </p>
            <button
              className="relative mt-4 lg:mt-8 font-dm bg-[#CD8A38] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              CONTACT US
              <span className="ml-2 inline-block -rotate-45">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Stacking Slider */}
      <div className="hidden lg:block">
        <div
          className="relative  mb-0"
          style={{ height: `${(services.length - 1) * 90}vh` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="sticky"
              style={{ top: `${index * 120}px` }}
            >
              <div
                className={`flex gap-8 lg:gap-20 flex-col lg:flex-row bg-[#fffcf2] py-6 border-t`}
              >
                <div className="lg:w-1/2 flex flex-col">
                  <span className="text-black font-semibold text-3xl lg:text-5xl mb-6 flex items-center gap-2 font-work ">
                    {service.heading}
                  </span>
                  <p className="text-black text-xl lg:text-3xl leading-relaxed mt-20">
                    {service.content}
                  </p>
                </div>
                <div className="lg:w-1/2 rounded-lg">
                  <img className="w-full" src={service.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="relative  mb-0"
          style={{ height: `${(services2.length - 1) * 90}vh` }}
        >
          {services2.map((service, index) => (
            <div
              key={index}
              className="sticky"
              style={{ top: `${index * 100}px` }}
            >
              <div
                className={`flex gap-8 lg:gap-20 flex-col lg:flex-row bg-[#fffcf2] py-6 border-t`}
              >
                <div className="lg:w-1/2 flex flex-col">
                  <span className="text-black font-semibold text-3xl lg:text-5xl mb-6 flex items-center gap-2 font-work ">
                    {service.heading}
                  </span>
                  <p className="text-black text-xl lg:text-3xl leading-relaxed mt-20">
                    {service.content}
                  </p>
                </div>
                <div className="lg:w-1/2 rounded-lg">
                  <img className="w-full" src={service.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-black/80 my-8 rounded-[24px] p-4 space-y-4">
        {services.map((service, index) => (
          <div
            className="p-2 rounded-[24px] bg-[#f5f5f5] relative overflow-hidden"
            key={index}
          >
            {/* Image container with overlay */}
            <div className="relative rounded-[24px] overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-[24px]"
                src={service.img}
                alt={service.heading}
              />

              {/* Black Overlay only on image */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Heading at bottom (on top of image) */}
              <div className="absolute bottom-0 left-0 w-full z-10 p-4">
                <p className="text-white text-[28px] font-semibold">
                  {service.heading}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
