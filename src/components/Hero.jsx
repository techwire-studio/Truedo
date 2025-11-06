import React from "react";

import bg from "../assets/Rectangle 13.png";
import logo from "../assets/logoLarge.png";
import hero from "../assets/heroNewDesign.png";
import logoMobile from "../assets/logoLargeMobile.png";
import heroMobile from "../assets/heroMobileNewDesign.png";
import bgMobile from "../assets/Rectangle 14.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ✅ DESKTOP */}
      <div className="hidden lg:flex relative w-full items-center justify-center">
        <img
          className="w-full h-screen object-cover"
          src={bg}
          alt="Background"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 mt-32">
          <img
            className="w-[75%] max-w-[650px] object-contain"
            src={logo}
            alt="Logo"
          />

          <img
            className="w-[80%] max-w-[900px] object-contain"
            src={hero}
            alt="Hero Design"
          />
        </div>
      </div>

      {/* ✅ MOBILE FIXED */}
      <div className="lg:hidden relative w-full h-fit flex items-center justify-center">
        
        {/* BG */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={bgMobile}
          alt="Background Mobile"
        />

        {/* CONTENT */}
        <div className="relative w-full flex flex-col items-center justify-center gap-6 px-4 py-16 pt-36">

          {/* Logo */}
          <img
            className="w-[75%] max-w-[260px] object-contain"
            src={logoMobile}
            alt="Logo"
          />

          {/* Hero Graphic */}
          <img
            className="w-[90%] max-w-[450px] object-contain"
            src={heroMobile}
            alt="Hero Mobile"
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;
