import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import logo from "../assets/serviveLogo.png"
import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";
import img5 from "../assets/service5.png";
import img6 from "../assets/service6.png";
import img7 from "../assets/service7.png";
import img8 from "../assets/service8.png";
import img9 from "../assets/service9.png";
import img10 from "../assets/service10.png";
import Arrow1 from "../assets/serviceArrow.png";
import Arrow2 from "../assets/serviceArrrow2.png";

const services = [
  {
    heading: "Modular Kitchens",
    content:
      "Thoughtfully designed for how you live, cook, and connect — modern kitchens that feel as good as they look.",
    img: img1,
  },
  {
    heading: "Modular Wardrobes",
    content:
      "Sleek, spacious, and factory-finished wardrobes that blend elegance with everyday comfort.",
    img: img2,
  },
  {
    heading: "Onsite Carpentry",
    content:
      "Onsite execution, precise detailing, and design-led craftsmanship for spaces that feel built around you.",
    img: img3,
  },
  {
    heading: "Windows & Doors",
    content:
      "Precision-engineered UPVC & aluminum frames that balance design and durability.",
    img: img4,
  },
  {
    heading: "Home Automation & Lighting",
    content:
      "From sunrise scenes to evening calm — Your home, perfectly in sync.Smart lighting that moves with you.",
    img: img5,
  },
  
];
const services2 = [
  {
    heading: "Curtains & Wallpapers",
    content:
      "Functional elegance for every space. Curtains and wallpapers designed for comfort and style.",
    img: img6,
  },
  {
    heading: "False Ceilings",
    content:
      "Clean lines, precise installation. False ceilings that enhance ambience and acoustics.",
    img: img7,
  },
  {
    heading: "Painting Services",
    content:
      "End-to-end renovation — from design to handover, we deliver ready-to-live homes, stress-free.",
    img: img8,
  },
  {
    heading: "Flooring Solutions",
    content:
      "Precision-laid surfaces, timeless appeal. Flooring solutions built to last beautifully.",
    img: img9,
  },
  {
    heading: "SOFAS & CHAIRS",
    content:
      "Whether it’s a statement armchair or a sectional sofa, Truedo creates seating that feels personal & timeless.",
    img: img10,
  },
];

const Services = () => {
  return (
    <div className="w-full font-helvetica lg:px-8 px-6">
      {/* Top Content */}
     <div className="w-full lg:pt-40 lg:mb-20 pt-28 lg:py-0">
      <div className="flex items-start justify-between flex-wrap gap-8">

        {/* TITLE */}
        <motion.div
          // initial={{ opacity: 0, y: 80 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
          // viewport={{ once: true }}
          className="text-[#202B1A] font-bold text-4xl lg:text-5xl flex items-center gap-2"
        >
          <img className="h-[40px]" src={logo} alt="" />
          <p>OUR</p>
          <p>SERVICES</p>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="max-w-2xl">
          <motion.p
            // initial={{ opacity: 0, y: 60 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            // viewport={{ once: true }}
            className="text-[#202B1A] text-[16px] lg:text-[22px] font-helvetica"
          >
            A creative team crafting interiors that blend beauty and function.
            From kitchens to full renovations, we design spaces that reflect
            your lifestyle with elegance and ease.
          </motion.p>

         <Link to="/contact">
          <motion.button
            // initial={{ opacity: 0, scale: 0.85 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // whileHover={{ scale: 1.05 }}
            // transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            // viewport={{ once: true }}
            className="relative mt-4 lg:mt-8 font-dm bg-[#CD8A38] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            CONTACT US
            <span className="ml-2 inline-block -rotate-45">→</span>
          </motion.button>
         </Link>
        </div>
      </div>
    </div>


      {/* Vertical Stacking Slider */}
      <div className="hidden lg:block">
        <div
          className="relative  mb-0"
          style={{ height: `${(services.length - 1) * 80}vh` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="sticky"
              style={{ top: `${index * 110}px` }}
            >
              <div
                className={`flex gap-8 lg:gap-20 flex-col lg:flex-row bg-[#fffcf2] py-6 border-t`}
              >
                <div className="lg:w-[50%] flex flex-col">
                  <span className="text-black font-semibold text-[44px] mb-6 flex items-center gap-2 font-work ">
                    {service.heading}
                  </span>
                  <p className="text-black font-dm text-[24px] leading-[41px] w-[90%]  mt-8">
                    {service.content}
                  </p>
                </div>
                <div className="lg:w-[50%] overflow-hidden">
                  <img className="w-full h-[350px] overflow-hidden" src={service.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
       <div
          className="relative  mb-0"
          style={{ height: `${(services.length - 1) * 80}vh` }}
        >
          {services2.map((service, index) => (
            <div
              key={index}
              className="sticky"
              style={{ top: `${index * 110}px` }}
            >
              <div
                className={`flex gap-8 lg:gap-20 flex-col lg:flex-row bg-[#fffcf2] py-6 border-t`}
              >
                <div className="lg:w-[50%] flex flex-col">
                  <span className="text-black font-semibold text-[44px] mb-6 flex items-center gap-2 font-work ">
                    {service.heading}
                  </span>
                  <p className="text-black font-dm text-[24px] leading-[41px] w-[90%]  mt-8">
                    {service.content}
                  </p>
                </div>
                <div className="lg:w-[50%] overflow-hidden">
                  <img className="w-full h-[350px] overflow-hidden" src={service.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden py-10">
            <div>
              {
              services.map((service,index) => (
                <div className="border-t-[1px] border-black/20 py-8" key={index}>
                    <div className="flex items-center gap-4">
                      <img className="h-14 w-20" src={service.img} alt="" />
                      <h4 className="font-work font-semibold text-[24px] leading-[24px]">{service.heading}</h4>
                    </div>
                    <div className="mt-2">
                      <p className="font-dm text-black"> {service.content}</p>
                    </div>
                </div>
              ))
            }
            </div>
            <div>
              {
              services2.map((service,index) => (
                <div className="border-t-[1px] border-black/20 py-8" key={index}>
                    <div className="flex items-center gap-4">
                      <img className="h-14 w-20" src={service.img} alt="" />
                      <h4 className="font-work font-semibold text-[24px] leading-[24px]">{service.heading}</h4>
                    </div>
                    <div className="mt-2">
                      <p className="font-dm text-black"> {service.content}</p>
                    </div>
                </div>
              ))
            }
            </div>
      </div>
    </div>
  );
};

export default Services;
