import React, { useState, useEffect, useRef } from "react";

import featured1 from "../assets/featured1.png";
import featured2 from "../assets/wardrobes.png"
import featured3 from "../assets/windows.png"
import arrow from "../assets/featuredArrow.png"

const featuredProducts = [
  {
    title: "MODULAR KITCHEN",
    description:
      "Truedo’s modular kitchens blend refined design with intelligent functionality.Each layout is crafted for efficiency and comfort — ensuring seamless use,premium finishes, and everyday elegance.",
    image: featured1,
  },
  {
    title: "WARDROBES",
    description:
      "Truedo’s wardrobes combine modern aesthetics with ergonomic detailing.Every unit is tailored for smarter storage and visual balance — delivering durability, precision, and timeless appeal.",
    image: featured1,
  },
  
  {
    title: "WINDOWS & DOORS",
    description:
      "Truedo’s UPVC and aluminum systems combine design and durability.Each frame is engineered for performance and precision — ensuring security, efficiency, and timeless aesthetics.",
    image: featured3,
  },
  
  
];

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isTransitioning = useRef(false);
  const wheelTimeout = useRef(null);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollingDown = e.deltaY > 0;

      // Only handle scroll when container is in viewport
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        // At last slide and scrolling down - allow natural scroll
        if (scrollingDown && currentSlide === featuredProducts.length - 1) {
          isTransitioning.current = false;
          return;
        }

        // At first slide and scrolling up - allow natural scroll
        if (!scrollingDown && currentSlide === 0) {
          isTransitioning.current = false;
          return;
        }

        // Block all scrolling during transition
        if (isTransitioning.current) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Prevent default scroll and handle slide change
        e.preventDefault();
        e.stopPropagation();

        // Start transition immediately
        isTransitioning.current = true;

        if (scrollingDown && currentSlide < featuredProducts.length - 1) {
          setCurrentSlide((prev) => prev + 1);
        } else if (!scrollingDown && currentSlide > 0) {
          setCurrentSlide((prev) => prev - 1);
        }

        // Reset transition lock after animation completes
        setTimeout(() => {
          isTransitioning.current = false;
        }, 750);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!containerRef.current || isTransitioning.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        touchEndY = e.touches[0].clientY;
        const scrollingDown = touchStartY > touchEndY;

        // At boundaries - allow natural scroll
        if (
          (scrollingDown && currentSlide === featuredProducts.length - 1) ||
          (!scrollingDown && currentSlide === 0)
        ) {
          return;
        }

        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (!containerRef.current || isTransitioning.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrollingDown = touchStartY > touchEndY;
        const diff = Math.abs(touchStartY - touchEndY);

        if (diff > 50) {
          // Minimum swipe distance
          isTransitioning.current = true;

          if (scrollingDown && currentSlide < featuredProducts.length - 1) {
            setCurrentSlide((prev) => prev + 1);
          } else if (!scrollingDown && currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
          }

          setTimeout(() => {
            isTransitioning.current = false;
          }, 750);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, [currentSlide]);

  const scrollHeight = (featuredProducts.length - 1) * 70;

  return (
    <div className="pb-8 lg:px-8 hidden lg:block" >
      {/* Scroll space - reduced for easier navigation */}
      <div style={{ height: `${scrollHeight}vh` }}>
        <div
          ref={containerRef}
          className="sticky top-0 w-full h-screen flex items-center"
        >
          <div className="w-full h-[calc(100vh-64px)] bg-[#202B1A] rounded-[51px] p-8 flex flex-col relative overflow-hidden">
            <p className="text-[#FFFCF2] capitalize lg:text-[28px] font-thin mb-4 relative z-10">
              Featured Products
            </p>

            {/* Slides */}
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
                style={{
                  top: "80px",
                }}
              >
                <div className="lg:w-[30%] text-[rgb(255,252,242)] mt-8">
                  <span className="flex items-start gap-4"><img src={arrow} alt="" /> <h2 className="lg:text-[36px] font-bold font-work leading-none">{product.title} </h2></span>
                  <p className="mt-8 font-dm leading-[37px] lg:text-[24px]">
                    {product.description}
                  </p>
                  <button
                    className="mt-16 text-[18px] relative font-dm bg-[#CD8A38] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
                    }}
                  >
                    GET A CUSTOM QUOTE
                    <span className="ml-2 inline-block -rotate-45">→</span>
                  </button>
                </div>
                <div className="lg:w-[70%] pb-20">
                  <div className="lg:w-[100%] flex items-center justify-center">
                    <img
                      className="max-h-[73vh] rounded-[35px] w-full object-cover transition-all duration-700"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
