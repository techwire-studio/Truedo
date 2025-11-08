import React from "react";

import bg from "../assets/Rectangle 13.png";
import logo from "../assets/logoLarge.png";
import hero from "../assets/heroNewDesign.png";
import group from "../assets/Group.svg"
import heroMobile from "../assets/homeHeroBg.png";
import bgMobile from "../assets/Rectangle 15.png";




const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ✅ DESKTOP */}
      <div
        className="hidden lg:flex relative w-full h-screen items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(32, 43, 26, 1) 0%, rgba(255, 252, 242, 1) 100%)",
        }}
      >
        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center  gap-6 px-6 pt-20">
          <img
            className="w-[80%] h-[150px]  object-contain"
            src={logo}
            alt="Logo"
          />

          <img
            className="w-[90%] lg:h-[450px]"
            src={hero}
            alt="Hero Design"
          />
        </div>
      </div>

      {/* ✅ MOBILE FIXED */}
      <div className="lg:hidden relative w-full h-full  flex items-center justify-center">
        {/* BG */}
        <img
          className="absolute inset-0 z-10 w-full  object-cover"
          src={bgMobile}
          alt="Background Mobile"
        />

        {/* CONTENT */}
        <div className="relative w-full flex flex-col items-center  gap-6 px-0 py-0 pt-0">
          {/* Logo */}
          <h3 className="absolute text-white z-10 text-center font-bold text-[38px] leading-none  pt-48 font-prata">Where Precision <br />
Meets Warmth</h3>
          <img className="absolute z-20 bottom-0 w-[98%]" src={group} alt="" />
          {/* Hero Graphic */}
          <img
            className="w-full"
            src={heroMobile}
            alt="Hero Mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
