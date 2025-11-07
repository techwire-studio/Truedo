import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/about-us-1.png";
import img2 from "../assets/about-us-2.png";
import exp1 from "../assets/Experience1.png";
import service from "../assets/AboutService.png";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

const experiences = [exp1, exp1, exp1, exp1];

const services = [
  {
    heading: "Quality",
    description:
      "Quality without compromise in every grain, every gloss.From premium materials to meticulous finishes, we ensure excellence that endures.",
  },
  {
    heading: "Transparency",
    description:
      "Transparency that builds trust — with honest pricing, clear timelines, and no hidden surprises.",
  },
  {
    heading: "INNOVATION",
    description:
      "Innovation that inspires — where modern technology meets smart, purposeful design.",
  },
  {
    heading: "CUSTOMER FIRST",
    description:
      "Customer First — because every home should reflect your story, your style, and your way of living.",
  },
];

const AboutUs = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION-1 BIG HEADINGS
      gsap.from(".about-head", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-head",
          start: "top 85%",
        },
      });

      // SECTION-1 TEXT
      gsap.from(".about-text", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 90%",
        },
      });

      // SECTION-1 IMAGES
      gsap.from(".about-img", {
        opacity: 0,
        scale: 0.85,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 85%",
        },
      });

      // EXPERIENCE GRID IMAGE STAGGER
      gsap.from(".exp-img", {
        opacity: 0,
        y: 70,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".exp-img",
          start: "top 90%",
        },
      });

      // SECTION-3 HEADING
      gsap.from(".promise-heading", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".promise-heading",
          start: "top 85%",
        },
      });

      // SECTION-3 IMAGE ZOOM
      gsap.from(".promise-img", {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".promise-img",
          start: "top 85%",
        },
      });

      // SERVICES TEXT STAGGER
      gsap.from(".service-box", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-box",
          start: "top 90%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="lg:px-8 px-6 lg:pt-40 pt-28">
      {/* Section 1 */}
      <div>
        <h1 className="about-head font-work font-medium text-[64px] lg:text-[118px] -tracking-wider leading-none p-0 m-0">
          ABOUT
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-4 h-fit">
          <div className="lg:w-[15%] flex flex-col justify-between">
            <div>
              <h1 className="about-head font-work font-medium text-[64px] lg:text-[118px] -tracking-wider leading-none p-0 m-0">
                US
              </h1>

              <p className="about-text font-work font-medium text-[#737373] lg:text-[16px] leading-[20px] text-[18px] -tracking-[3%] text-justify mt-6 lg:mt-2">
                Spaces that anticipate, <br /> adapt, and inspire.
              </p>
            </div>

            <div className="mt-6 lg:mt-0">
              <p className="about-text font-dm font-semibold lg:leading-[37px] leading-[20px] text-[22px] lg:text-[28px]">
                We don’t <br /> decorate <br /> spaces. We compose experiences.
              </p>
            </div>
          </div>

          <div className="lg:w-[60%] py-8 lg:py-0">
            <img className="about-img lg:h-[450px] w-full" src={img1} alt="" />
          </div>

          <div className="lg:w-[25%] flex flex-col-reverse lg:flex-col justify-between">
            <div className="mt-6 lg:mt-0">
              <img className="about-img w-full" src={img2} alt="" />
            </div>

            <div>
              <h5 className="about-text font-work font-medium text-[#737373] lg:text-[40px] text-[32px] mt-2">
                True Philosophy
              </h5>

              <p className="about-text font-work font-medium text-[#737373] lg:text-[18px] text-[18px] leading-[20px] lg:leading-[27.9px] -tracking-[6%] text-justify">
                Every decision intentional, every space thoughtfully
                orchestrated, every home a reflection of its people.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F9F7F3] lg:my-12 rounded-[32px] py-8">
        <div className="lg:flex justify-between items-center">
          <div>
            <h5 className="about-text font-work font-semibold leading-none text-[28px] lg:text-[36px]">
              The Curators <br /> Of Experience
            </h5>
          </div>
          <div>
            <p className="about-text font-work text-[#737373] font-medium text-[16px] mt-4 lg:mt-0 lg:text-[16px] leading-[20.9px]">
              We shape interiors with intention, <br /> orchestrate spaces with
              care, <br /> and create homes that feel effortlessly <br />{" "}
              lived-in.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full mt-6">
          {experiences.map((experience, index) => (
            <div key={index}>
              <img
                className="exp-img w-full lg:h-[400px]"
                src={experience}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex flex-col lg:flex-row lg:gap-16">
        <div className="lg:w-[50%]">
          <h4 className="promise-heading font-work font-semibold text-[42px] lg:text-[56px] -tracking-[6%]">
            True Promise
          </h4>

          <div className=" mt-2">
            <p className="about-text font-dm lg:text-[18px] lg:w-[80%]">
              Interiors designed to respond to the way you live. From concept to
              completion, Truedo blends function, artistry, and precision to
              craft spaces that feel effortless, personal, and timeless.
            </p>
          </div>

          <div className="mt-6 lg:mt-12">
            <img
              className="promise-img w-full lg:h-[400px] object-cover rounded-[21px]"
              src={service}
              alt=""
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-8 lg:gap-0 mt-8 lg:mt-0 justify-between">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <h5 className="font-dm font-bold text-[24px] lg:text-[28px] tracking-[4px] uppercase">
                {service.heading}
              </h5>
              <p className="font-dm tracking-[8%] lg:leading-[31px] lg:text-[22px] mt-2 lg:mt-4 font-light text-[#737373]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" lg:px-8 px-0 py-16 lg:py-32 font-dm flex flex-col items-center justify-center">
        <div className="w-full text-center text-[#202B1A] font-semibold  text-[16px] lg:text-[28px]  font-dm rounded-[60.74px] border-dashed border-[#202B1A] border-[2.22px] px-4 lg:px-16 pt-4 lg:pt-4 pb-6 lg:pb-6">
          Let’s bring your dream space to life
        </div>
        <div className="absolute font-bold mt-16 lg:mt-28 bg-[#CD8A38] shadow-[0px_4.42px_9.02px_10.1px_rgba(255,176,4,0.2)] w-fit rounded-[60.74px] text-[#f5f5f5] font-dm lg:text-[20px] px-8 lg:px-12 py-2 lg:py-4 lg:-rotate-6 hover:rotate-0 transition duration-300">
          Request a Call Back
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
