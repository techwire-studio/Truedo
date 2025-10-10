import React from "react";
import featured1 from "../assets/featured1.png";

const Featured = () => {
  return (
    <div className="py-8">
      <div className="w-full h-[calc(100vh-64px)] bg-[#202B1A] rounded-[51px] p-8 flex flex-col">
        <p className="text-[#FFFCF2] capitalize lg:text-[28px] font-thin mb-4">
          Featured Products
        </p>

        <div className="flex-1 flex lg:gap-16">
          <div className="lg:w-[30%] text-[#FFFCF2] mt-8">
            <h2 className="lg:text-[32px]">MODULAR KITCHEN</h2>
            <p className="mt-8 lg:text-[22px]">
              Our modular kitchen designs blend style, functionality, and smart
              space utilization. With sleek layouts, high-quality finishes, and
              innovative storage solutions, we create kitchens that make cooking
              and dining a joyful experience. Each design is tailored to your
              lifestyle, ensuring convenience meets elegance.
            </p>
            <div>
          <button
            className="mt-10 relative font-dm bg-[#CD8A38] text-white px-4 py-2 font-semibold tracking-wide  transition-colors"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            GET A CUSTOM QUOTE
            <span className="ml-2 inline-block -rotate-45">→</span>
          </button>
        </div>
          </div>
          <div className="lg:w-[70%]">
            <img className="h-[550px] w-full" src={featured1} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
