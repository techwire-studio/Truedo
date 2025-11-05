import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroDesktop from "../assets/hero2.png";
import heroMobile from "../assets/HeroMobile.png";
import heroLogo from "../assets/heroLogo.png";
import miniLogo from "../assets/serviveLogo.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const smallTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /** --- FADE SLIDE HERO LOGO --- **/
      gsap.from(logoRef.current, {
        opacity: 0,
        scale: 1.6,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.2,
      });

      /** --- BOTTOM LEFT TEXT --- **/
      gsap.from(textLeftRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      /** --- RIGHT TEXT --- **/
      gsap.from(textRightRef.current, {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });

      /** --- MOBILE TEXT --- **/
      gsap.from(smallTextRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      /** --- SCROLL FADE OUT HERO --- **/
      // gsap.to(containerRef.current, {
      //   opacity: 0,
      //   scale: 0.98,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      // });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-x-hidden flex justify-center items-center"
    >
      {/* Centered logo */}
      <div
        ref={logoRef}
        className="absolute inset-0 hidden lg:flex lg:gap-4 items-center justify-center z-10"
      >
        <img className="lg:w-[450px] lg:h-auto" src={heroLogo} alt="" />
      </div>

      {/* Text at bottom-left */}
      <div
        ref={textLeftRef}
        className="hidden lg:block absolute bottom-8 left-8 z-10 text-[#FFFCF2] uppercase"
      >
        <p className="text-lg lg:text-[22px] font-helvetica">
          Crafting Interiors That Define <br />
          Modern Living
        </p>
      </div>

      {/* Text bottom-right */}
      <div
        ref={textRightRef}
        className="absolute bottom-8 right-8 z-20 text-[#fffcf2] uppercase text-right space-y-2 text-[16px] lg:text-[14px]"
      >
        <p>MODULAR KITCHENS</p>
        <p>HOME INTERIORS</p>
        <p>WARDROBES</p>
      </div>

      {/* Mobile text */}
      <div
        ref={smallTextRef}
        className="m-4 rounded-[25px] overflow-hidden inset-0 bg-black/20 flex flex-col justify-center items-center lg:hidden absolute  z-10 text-[#FFFCF2] font-semibold uppercase leading-none text-[32px]"
      >
        <p>WHERE</p>
        <p>Precision</p>
        <div className="flex gap-2">
          <p>MEETS</p> <img className="h-[36px] w-auto" src={miniLogo} alt="" />
        </div>
        <p>Warmth</p>
      </div>

      {/* Background */}
      <img
        className="h-screen w-full hidden lg:block"
        src={heroDesktop}
        alt="Hero"
      />
      <img
        className="h-screen w-full lg:hidden p-4 object-cover rounded-[40px]"
        src={heroMobile}
        alt=""
      />
    </div>
  );
};

export default Hero;
