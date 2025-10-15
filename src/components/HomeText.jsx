import React from "react";

import image1 from "../assets/heroTextImage.png";

const HomeText = () => {
  return (
    <div className="w-full lg:py-20 flex justify-between">
      <div className="lg:w-1/2 ">
        <p className="text-[#202B1A] lg:text-[20px] leading-tight font-work">
          A creative team crafting interiors that blend <br /> beauty and
          function. From kitchens to full <br /> renovations, we design spaces
          that reflect your <br /> lifestyle with elegance and ease.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col items-end text-right">
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
