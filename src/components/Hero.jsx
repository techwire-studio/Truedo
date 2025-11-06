// import React from "react";
// import heroDesktop from "../assets/hero2.png";
// import heroMobile from "../assets/HeroMobile.png"
// import heroLogo from "../assets/heroLogo.png";
// import miniLogo from "../assets/serviveLogo.png"

// const Hero = () => {
//   return (
//     <div className="w-full h-screen relative overflow-x-hidden flex justify-center items-center" >
//       {/* Centered logo */}
//       <div className="absolute inset-0 hidden lg:flex lg:gap-4 items-center  justify-center z-10">
//         <img className="lg:w-[450px] lg:h-auto" src={heroLogo} alt="" />

//       </div>

//       {/* Text at bottom-left */}
//       <div className="hidden lg:block absolute bottom-8 left-8 z-10 text-[#FFFCF2] uppercase">
//         <p className="text-lg lg:text-[22px] font-helvetica">
//           Crafting Interiors That Define <br />
//           Modern Living
//         </p>
//       </div>
//       {/* Text at bottom-left */}
//       <div className="absolute bottom-8 right-8 z-20 text-[#fffcf2] uppercase text-right space-y-2 text-[16px] lg:text-[14px]">
//         <p>MODULAR KITCHENS</p>
//         <p className="">HOME INTERIORS</p>
//         <p>WARDROBES</p>
//       </div>
//       <div className="m-4 rounded-[25px] overflow-hidden inset-0 bg-black/20 flex flex-col justify-center items-center lg:hidden absolute  z-10 text-[#FFFCF2] font-semibold uppercase  leading-none text-[32px]">
//         <p>WHERE</p>
//         <p>Precision</p>
//         <div className="flex gap-2">
//           <p>MEETS</p> <img className="h-[36px] w-auto" src={miniLogo} alt="" />
//         </div>
//         <p>Warmth</p>
//       </div>

//       {/* Background image */}
//       <img className="h-screen w-full hidden lg:block" src={heroDesktop} alt="Hero" />
//       <img className="h-screen w-full lg:hidden p-4 object-cover  rounded-[40px]" src={heroMobile} alt="" />

//     </div>
//   );
// };

// export default Hero;

import React from "react";

import bg from "../assets/Rectangle 13.png";
import logo from "../assets/logoLarge.png";
import hero from "../assets/heroNewDesign.png";
import logoMobile from "../assets/logoLargeMobile.png";
import heroMobile from "../assets/heroMobileNewDesign.png";
import bgMobile from "../assets/Rectangle 14.png";

const Hero = () => {
  return (
    <div className="">
      {/* Desktop */}
      <div className="hidden lg:flex  items-center relative ">
        <img className="w-full max-h-screen" src={bg} alt="" />
        <div className="inset-0 flex flex-col gap-4 w-[75%] m-auto h-fit  absolute z-10 mt-36">
          <img className="lg:h-[160px] lg:w-[90%] m-auto" src={logo} alt="" />
          <img className="" src={hero} alt="" />
        </div>
      </div>
      <div className="lg:hidden relative w-full">
        {/* BG */}
        <img className="w-full h-full" src={bgMobile} alt="" />

        {/* CONTENT */}
        <div className="absolute top-8 gap-8 left-1/2 -translate-x-1/2 w-[80%] z-10 flex flex-col items-center mt-28">
          <img className="h-[60px] w-[90%]" src={logoMobile} alt="" />
          <img className="w-full object-contain" src={heroMobile} alt="" />
          <p className="absolute z-20 bottom-4 font-work text-white">Where Precision Meets Warmth</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
