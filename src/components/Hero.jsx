import React from "react";
import heroDesktop from "../assets/hero2.png";
import heroMobile from "../assets/HeroMobile.png"
import heroLogo from "../assets/heroLogo.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-x-hidden" >
      {/* Centered logo */}
      <div className="absolute inset-0 hidden lg:flex lg:gap-4 items-center  justify-center z-10">
        <img className="lg:w-[450px] lg:h-auto" src={heroLogo} alt="" />
        
      </div>

      {/* Text at bottom-left */}
      <div className="hidden lg:block absolute bottom-8 left-8 z-10 text-[#FFFCF2] uppercase">
        <p className="text-lg lg:text-[22px] font-helvetica">
          Crafting Interiors That Define <br />
          Modern Living
        </p>
      </div>
      {/* Text at bottom-left */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-10 text-[#FFFCF2] uppercase text-right space-y-2 lg:text-[14px]">
        <p>MODULAR KITCHENS</p>
        <p className="">HOME INTERIORS</p>
        <p>WARDROBES</p>
      </div>

      {/* Background image */}
      <img className="h-screen w-full hidden lg:block" src={heroDesktop} alt="Hero" />
      <img className="h-screen w-full lg:hidden p-4 object-cover rounded-[40px]" src={heroMobile} alt="" />
      
    </div>
  );
};

export default Hero;
