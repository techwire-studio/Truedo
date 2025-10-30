import React from "react";

import image1 from "../assets/heroTextImage.png";

const HomeText = () => {
  return (
    <div className="w-full lg:py-20 px-6 py-8 gap-8 lg:gap-0 flex flex-col lg:flex-row justify-between lg:px-8">
      <div className="lg:w-1/2 ">
        <p className="text-[#202B1A] lg:text-[20px] leading-tight font-work">
          At Truedo Living Spaces, we’ve spent over a <br /> decade mastering the art of manufacturing <br /> modular furniture, PU coating & other specialty <br /> paints for our B2B clients. Now, we’re bringing <br /> the same expertise directly to homes.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col lg:items-end text-right">
        <div className="w-fit">
          <p className="text-[40px] font-bold font-helvetica leading-tight tracking-tight">
            Shaping Spaces &
          </p>
          <span className="flex items-start justify-start">
            <p className="text-[40px] font-bold font-helvetica leading-tight tracking-tight">
              Lifestyles
            </p>
            <img className="h-[50px] w-[70px] ml-2" src={image1} alt="" />
          </span>
        </div>
         
      </div>
    </div>
  );
};

export default HomeText;
