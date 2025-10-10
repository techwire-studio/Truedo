import React from "react";
import serviceLogo from "../assets/our-services.png";

import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";
import img5 from "../assets/service5.png";
import img6 from "../assets/service6.png";
import img7 from "../assets/service7.png";
import img8 from "../assets/service8.png";
import img9 from "../assets/service9.png";

const services = [
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img1,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img2,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img3,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img4,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img5,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img6,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img7,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img3,
  },
  {
    heading: "Modular Furniture",
    content:
      "Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    img: img9,
  },
];

const Services = () => {
  return (
    <div className="w-full py-32">
      {/* Top Content */}
      <div className="flex items-start mt-10 justify-between">
        <div className="text-[#202B1A] font-bold text-[44px] flex items-center gap-2">
          <p>OUR</p>
          <img className="h-[48px] w-[60px]" src={serviceLogo} alt="" />
          <p>SERVICES</p>
        </div>
        <div>
          <p className="text-[#202B1A] text-[20px] leading-6">
            A creative team crafting interiors that blend beauty and <br />{" "}
            function. From kitchens to full renovations, we design <br /> spaces
            that reflect your lifestyle with elegance and ease.
          </p>
          <button
            className="relative mt-10 font-dm bg-[#CD8A38] text-white w-fit px-8 py-4 font-semibold tracking-wide  transition-colors"
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

      <div className="mt-10 space-y-10">
        {/* Slider */}
      {services.map((service, index) => (
        <div
          className={`flex gap-20 lg:h-[400px]  p-8 rounded-[13px] ${
            index % 2 === 0 ? "bg-[#202B1A]" : "bg-[#CD8A38]"
          }`}
          key={index}
        >
          <div className="w-1/2 py-8 flex flex-col justify-between">
                <h2 className="text-white font-work font-semibold text-[44px]">{service.heading}</h2>
                <p className="text-[#F2ECD9] font-dm text-[28px] leading-9 w-[80%]">{service.content}</p>
          </div>
          <div className="w-1/2 h-fit">
            <img className="w-full object-cover" src={service.img} alt="" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;
