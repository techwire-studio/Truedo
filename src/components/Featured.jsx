import React, { useState, useEffect, useRef } from "react";

import featured1 from "../assets/featured1.png";
import featured2 from "../assets/service2.png";
import featured3 from "../assets/service4.png";
import featured4 from "../assets/featuredMobile1.png";
import featured5 from "../assets/featuredMobile2.png";
import featured6 from "../assets/featuredMobile3.png";
import arrow from "../assets/featuredArrow.png";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    title: "MODULAR KITCHEN",
    description:
      "Truedo’s modular kitchens blend refined design with intelligent functionality.Each layout is crafted for efficiency and comfort — ensuring seamless use,premium finishes, and everyday elegance.",
    image: featured1,
    shortDescription: "Crafted for function, styled for life.",
  },
  {
    title: "WARDROBES",
    description:
      "Truedo’s wardrobes combine modern aesthetics with ergonomic detailing.Every unit is tailored for smarter storage and visual balance — delivering durability, precision, and timeless appeal.",
    image: featured2,
    shortDescription: "Intelligent storage with seamless aesthetics.",
  },

  {
    title: "WINDOWS & DOORS",
    description:
      "Truedo’s UPVC and aluminum systems combine design and durability.Each frame is engineered for performance and precision — ensuring security, efficiency, and timeless aesthetics.",
    image: featured3,
    shortDescription: "Designed for comfort, detailed for distinction.",
  },
];
const featuredProductsMobile = [
  {
    title: "MODULAR KITCHEN",
    description:
      "Truedo’s modular kitchens blend refined design with intelligent functionality.Each layout is crafted for efficiency and comfort — ensuring seamless use,premium finishes, and everyday elegance.",
    image: featured4,
    shortDescription: "Crafted for function, styled for life.",
  },
  {
    title: "WARDROBES",
    description:
      "Truedo’s wardrobes combine modern aesthetics with ergonomic detailing.Every unit is tailored for smarter storage and visual balance — delivering durability, precision, and timeless appeal.",
    image: featured5,
    shortDescription: "Intelligent storage with seamless aesthetics.",
  },

  {
    title: "WINDOWS & DOORS",
    description:
      "Truedo’s UPVC and aluminum systems combine design and durability.Each frame is engineered for performance and precision — ensuring security, efficiency, and timeless aesthetics.",
    image: featured6,
    shortDescription: "Designed for comfort, detailed for distinction.",
  },
];

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let wheelDelta = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const SCROLL_THRESHOLD = 80;
    const TRANSITION_TIME = 800;

    const atFirstSlide = currentSlide === 0;
    const atLastSlide = currentSlide === featuredProducts.length - 1;

    const isInViewport = () => {
      const rect = containerRef.current.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const goToSlide = (direction) => {
      if (isTransitioning.current) return;

      isTransitioning.current = true;

      if (direction === "down" && !atLastSlide) {
        setCurrentSlide((s) => s + 1);
      } else if (direction === "up" && !atFirstSlide) {
        setCurrentSlide((s) => s - 1);
      }

      setTimeout(() => {
        isTransitioning.current = false;
        wheelDelta = 0;
      }, TRANSITION_TIME);
    };

    const handleWheel = (e) => {
      if (!isInViewport()) return;

      const scrollingDown = e.deltaY > 0;

      if ((scrollingDown && atLastSlide) || (!scrollingDown && atFirstSlide)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      if (isTransitioning.current) return;

      wheelDelta += e.deltaY;

      if (Math.abs(wheelDelta) >= SCROLL_THRESHOLD) {
        goToSlide(scrollingDown ? "down" : "up");
        wheelDelta = 0;
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isInViewport()) return;

      touchEndY = e.touches[0].clientY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (!isInViewport() || isTransitioning.current) return;

      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) < 50) return;

      if (diff > 0) goToSlide("down");
      else goToSlide("up");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  const scrollHeight = (featuredProducts.length - 1) * 180;

  return (
    <div>
      {/* Desktop */}
      <div className="pb-8 lg:px-8 hidden lg:block">
        <div style={{ height: `${scrollHeight}vh` }}>
          <div
            ref={containerRef}
            className="sticky top-0 w-full h-screen flex items-center"
          >
            <div className="w-full h-[calc(100vh-64px)] bg-[#202B1A] rounded-[51px] p-8 flex flex-col relative overflow-hidden">
              <p className="text-[#FFFCF2] capitalize lg:text-[28px] font-thin mb-4 relative z-10">
                Featured Products
              </p>

              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className={`absolute inset-8 flex-1 flex lg:gap-16 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : index < currentSlide
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                  style={{ top: "80px" }}
                >
                  <div className="lg:w-[40%] text-[rgb(255,252,242)] mt-8 flex flex-col">
                    <span className="flex items-start gap-4">
                      <img src={arrow} alt="" />{" "}
                      <h2 className="lg:text-[36px] font-bold font-work leading-none">
                        {product.title}{" "}
                      </h2>
                    </span>
                    <p className="mt-8 font-dm leading-[37px] tracking-wider lg:text-[22px]">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <Link to="/contact">
                        <button
                          className="mt-4 text-[18px] font-dm bg-[#CD8A38] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
                          }}
                        >
                          GET A CUSTOM QUOTE
                          <span className="ml-2 inline-block -rotate-45">
                            →
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-[60%] pb-20 flex justify-center items-center">
                    <img
                      className="h-auto w-full rounded-[35px] transition-all duration-700"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="px-2">
        <div className="lg:hidden px-6 py-6 space-y-8 bg-black/90 rounded-[38px]">
          {featuredProductsMobile.map((product, index) => (
            <div className="relative" key={index}>
              <img
                className="rounded-[24px] w-full h-auto"
                src={product.image}
                alt=""
              />
              <div className="absolute inset-0 bg-black/20 overflow-hidden rounded-[20px] flex flex-col justify-end p-4">
                <h5 className="text-white font-work font-semibold text-[24px]">
                  {product.title}
                </h5>
                <p className="text-white font-work font-medium text-[12px] leading-none">
                  {product.shortDescription}
                </p>
                <Link to="/contact">
                  <button className="mt-2 text-[14px] font-dm bg-[#CD8A38] text-white px-4 py-2 rounded hover:bg-[#b57830] transition-colors">
                    GET A CUSTOM QUOTE
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
