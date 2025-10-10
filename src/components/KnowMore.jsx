import React from "react";
import knowLogo1 from "../assets/knowLogo1.png";
import knowLogo2 from "../assets/knowLogo2.png";

const KnowMore = () => {
  return (
    <div className="lg:py-32">
      <div className="flex gap-4 justify-center items-center">
        <div className="w-[50%] flex flex-col items-end">
          <h2 className="text-[#202B1A] font-work font-semibold lg:text-[64px] m-0 leading-none">
            Know
          </h2>
          <img className="h-[55px] w-[120px] mr-6" src={knowLogo1} alt="" />
          <div className="mt-16 relative group bg-white border-[.88px] rounded-[25.22px]  border-[#CD8B3B]  py-8 px-16 overflow-hidden">
            {/* Background image that appears on hover */}
            <div className="absolute inset-0 bg-[url('/src/assets/serviveLogo.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full"></div>

            {/* Text */}
            <h4 className="relative text-[#CD8B3B] group-hover:text-white font-work font-semibold lg:text-[48px] transition-colors duration-500">
              About Company
            </h4>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-start">
          <img className="h-[55px] w-[100px] ml-6" src={knowLogo2} alt="" />
          <h2 className="text-[#CD8B3B] font-work font-semibold lg:text-[64px] m-0 leading-none">
            More
          </h2>
          <div className="mt-16 relative group bg-white border-[.88px] rounded-[25.22px]  border-[#CD8B3B]  py-8 px-16 overflow-hidden">
            {/* Background image that appears on hover */}
            <div className="absolute inset-0 bg-[url('/src/assets/serviveLogo.png')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full"></div>

            {/* Text */}
            <h4 className="relative text-[#CD8B3B] group-hover:text-white font-work font-semibold lg:text-[48px] transition-colors duration-500">
              Our Portfolio
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
