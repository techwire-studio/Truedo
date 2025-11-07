import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/heroTextImage.png";

gsap.registerPlugin(ScrollTrigger);

const HomeText = () => {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /** Left paragraph */
      gsap.from(leftTextRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      /** Right heading */
      gsap.from(headingRef.current, {
        opacity: 0,
        x: 50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      /** Small image pop */
      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 0.6,
        rotate: -10,
        duration: 1,
        ease: "back.out(1.8)",
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full lg:py-20 px-6 py-8 gap-8 lg:gap-0 flex flex-col lg:flex-row justify-between lg:px-8"
    >
      <div ref={leftTextRef} className="lg:w-1/2">
        <p className="text-[#202B1A] lg:text-[20px] leading-tight font-work">
          At Truedo Living Spaces, we’ve spent over a <br className="hidden lg:block" /> 
          decade mastering the art of manufacturing <br className="hidden lg:block" />  
          modular furniture, PU coating & other specialty <br className="hidden lg:block" />  
          paints for our B2B clients. Now, we’re bringing <br className="hidden lg:block" />  
          the same expertise directly to homes.
        </p>
      </div>

      <div className="lg:w-1/2 flex flex-col lg:items-end text-right">
        <div ref={headingRef} className="w-fit">
          <p className="text-[36px] lg:text-[40px] font-bold font-helvetica leading-tight tracking-tight">
            Shaping Spaces &
          </p>

          <span className="flex items-start justify-start lg:justify-end">
            <p className=" text-[36px] lg:text-[40px] font-bold font-helvetica leading-tight tracking-tight">
              Lifestyles
            </p>
            <img
              ref={imgRef}
              className="h-[50px] w-[70px] ml-2"
              src={image1}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
