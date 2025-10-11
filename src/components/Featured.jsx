import React, { useState, useEffect, useRef } from "react";

const featuredProducts = [
  {
    title: "MODULAR KITCHEN",
    description:
      "Our modular kitchen designs blend style, functionality, and smart space utilization. With sleek layouts, high-quality finishes, and innovative storage solutions, we create kitchens that make cooking and dining a joyful experience. Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
    image: "kitchen",
  },
  {
    title: "LIVING ROOM DESIGN",
    description:
      "Transform your living space into a haven of comfort and style. Our designs focus on creating warm, inviting environments that reflect your personality while maximizing functionality. From modern minimalism to classic elegance, we craft spaces that bring families together.",
    image: "living",
  },
  {
    title: "BEDROOM INTERIORS",
    description:
      "Create your perfect sanctuary with our bedroom interior solutions. We combine aesthetics with comfort, offering custom designs that promote relaxation and tranquility. Every element is carefully chosen to ensure your bedroom becomes a peaceful retreat from the world.",
    image: "bedroom",
  },
  {
    title: "OFFICE SPACES",
    description:
      "Design a workspace that inspires productivity and creativity. Our office solutions blend professional aesthetics with ergonomic functionality, creating environments that enhance focus and motivation. Whether home office or corporate space, we deliver excellence.",
    image: "office",
  },
];

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isTransitioning = useRef(false);
  const wheelTimeout = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollingDown = e.deltaY > 0;
      
      // Only handle scroll when container is in viewport
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        
        // At last slide and scrolling down - allow natural scroll
        if (scrollingDown && currentSlide === featuredProducts.length - 1) {
          isTransitioning.current = false;
          return; // Let browser handle scroll naturally
        }
        
        // At first slide and scrolling up - allow natural scroll
        if (!scrollingDown && currentSlide === 0) {
          isTransitioning.current = false;
          return; // Let browser handle scroll naturally
        }

        // Block all scrolling during transition
        if (isTransitioning.current) {
          e.preventDefault();
          return;
        }

        // Prevent default scroll and handle slide change
        e.preventDefault();
        
        // Start transition immediately
        isTransitioning.current = true;

        if (scrollingDown && currentSlide < featuredProducts.length - 1) {
          // Scroll down - next slide
          setCurrentSlide((prev) => prev + 1);
        } else if (!scrollingDown && currentSlide > 0) {
          // Scroll up - previous slide
          setCurrentSlide((prev) => prev - 1);
        }

        // Reset transition lock after animation completes
        setTimeout(() => {
          isTransitioning.current = false;
        }, 750);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="pb-8">
      {/* Scroll space - reduced for easier navigation */}
      <div style={{ height: `${(featuredProducts.length - 1) * 50}vh` }}>
        <div ref={containerRef} className="sticky top-0 w-full h-screen flex items-center">
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
                <div className="lg:w-[30%] text-[#FFFCF2] mt-8">
                  <h2 className="lg:text-[32px] font-bold">
                    {product.title}
                  </h2>
                  <p className="mt-8 lg:text-[22px] leading-relaxed">
                    {product.description}
                  </p>
                  <button
                    className="mt-10 relative font-dm bg-[#CD8A38] text-white px-4 py-2 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
                    }}
                  >
                    GET A CUSTOM QUOTE
                    <span className="ml-2 inline-block -rotate-45">→</span>
                  </button>
                </div>
                <div className="lg:w-[70%]">
                  <div className="h-[550px] w-full bg-gradient-to-br from-[#CD8A38] to-[#8B5A2B] rounded-2xl flex items-center justify-center text-white/30 text-6xl font-bold">
                    {product.image.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-8 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-[#CD8A38] h-12"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Text */}
            <div className="absolute bottom-8 left-8 text-white/50 text-sm z-20">
              {currentSlide + 1} / {featuredProducts.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;