import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../assets/serviveLogo.png";
import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";
import img5 from "../assets/service5.png";
import img6 from "../assets/service6.png";
import img7 from "../assets/service7.png";
import img8 from "../assets/service8.png";
import img9 from "../assets/service9.png";
import img10 from "../assets/service10.png";

const services = [
  {
    id: "modular-kitchens",
    heading: "Modular Kitchens",
    content:
      "Thoughtfully designed for how you live, cook, and connect — modern kitchens that feel as good as they look.",
    img: img1,
  },
  {
    id: "modular-wardrobes",
    heading: "Modular Wardrobes",
    content:
      "Sleek, spacious, and factory-finished wardrobes that blend elegance with everyday comfort.",
    img: img2,
  },
  {
    id: "onsite-carpentry",
    heading: "Onsite Carpentry",
    content:
      "Onsite execution, precise detailing, and design-led craftsmanship for spaces that feel built around you.",
    img: img3,
  },
  {
    id: "windows-doors",
    heading: "Windows & Doors",
    content:
      "Precision-engineered UPVC & aluminum frames that balance design and durability.",
    img: img4,
  },
  {
    id: "home-automation-lighting",
    heading: "Home Automation & Lighting",
    content:
      "From sunrise scenes to evening calm — Your home, perfectly in sync. Smart lighting that moves with you.",
    img: img5,
  },
  {
    id: "curtains-wallpapers",
    heading: "Curtains & Wallpapers",
    content:
      "Functional elegance for every space. Curtains and wallpapers designed for comfort and style.",
    img: img6,
  },
  {
    id: "false-ceilings",
    heading: "False Ceilings",
    content:
      "Clean lines, precise installation. False ceilings that enhance ambience and acoustics.",
    img: img7,
  },
  {
    id: "painting-services",
    heading: "Painting Services",
    content:
      "End-to-end renovation — from design to handover, we deliver ready-to-live homes, stress-free.",
    img: img8,
  },
  {
    id: "flooring-solutions",
    heading: "Flooring Solutions",
    content:
      "Precision-laid surfaces, timeless appeal. Flooring solutions built to last beautifully.",
    img: img9,
  },
  {
    id: "sofas-chairs",
    heading: "Sofas & Chairs",
    content:
      "Whether it's a statement armchair or a sectional sofa, Truedo creates seating that feels personal & timeless.",
    img: img10,
  },
];

const Services = () => {
  const target = useRef(null);
  const cardRefs = useRef([]);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  const { scrollY } = useScroll({ offset: ["start start", "end end"], target });

  useEffect(() => {
    if (selectedId && target.current && window.innerWidth >= 1024) {
      const serviceIndex = services.findIndex(
        (service) => service.id === selectedId
      );

      if (serviceIndex !== -1) {
        const cardHeight = window.innerHeight;

        const scrollPosition = (serviceIndex + 1) * cardHeight;

        const timeoutId = setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [selectedId]);

  useEffect(() => {
    if (selectedId && window.innerWidth < 1024) {
      const serviceIndex = services.findIndex(
        (service) => service.id === selectedId
      );

      if (serviceIndex !== -1 && cardRefs.current[serviceIndex]) {
        const timeoutId = setTimeout(() => {
          const element = cardRefs.current[serviceIndex];
          if (element) {
            const topOffset =
              element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({
              top: topOffset,
              behavior: "smooth",
            });
          }
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [selectedId]);

  return (
    <div className="w-full font-helvetica lg:px-8 px-6">
      <div className="w-full lg:pt-40 pt-28 lg:py-0">
        <div className="flex items-start justify-between flex-wrap gap-8">
          <motion.div className="text-[#202B1A] font-bold text-4xl lg:text-5xl flex items-center gap-2">
            <img className="h-[40px]" src={logo} alt="Truedo Services Image" />
            <p>OUR</p>
            <p>SERVICES</p>
          </motion.div>

          <div className="max-w-2xl">
            <motion.p className="text-[#202B1A] text-[16px] lg:text-[22px] font-helvetica">
              A creative team crafting interiors that blend beauty and function.
              From kitchens to full renovations, we design spaces that reflect
              your lifestyle with elegance and ease.
            </motion.p>

            <Link to="/contact">
              <motion.button
                className="relative mt-4 lg:mt-8 font-dm bg-[#CD8A38] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#b57830] transition-colors"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                CONTACT US{" "}
                <span className="ml-2 inline-block -rotate-45">→</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={target}
        className="hidden lg:block relative"
        style={{ height: `${(services.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex justify-center items-center">
          {services.map((service, index) => {
            const cardHeight = window.innerHeight;

            const start = index * cardHeight;
            const middle = start + cardHeight;
            const exit = start + cardHeight * 4;
            const isFirst = index === 0;

            const y = useTransform(
              scrollY,
              [start, middle, exit],
              isFirst ? [0, 0, -400] : [400, 0, -400]
            );

            const opacity = useTransform(
              scrollY,
              [start, start + cardHeight * 0.2, middle],
              isFirst ? [1, 1, 1] : [0, 1, 1]
            );

            return (
              <motion.div
                key={service.id}
                id={service.id}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ y, opacity }}
                className="absolute w-full will-change-transform"
              >
                <div className="flex gap-8 lg:gap-20 flex-col lg:flex-row bg-[#fffcf2] py-6 border-t">
                  <div className="lg:w-[50%] flex flex-col">
                    <span className="text-black font-semibold text-[44px] mb-6 flex items-center gap-2 font-work">
                      {service.heading}
                    </span>
                    <p className="text-black font-dm text-[24px] leading-[41px] w-[90%] mt-8">
                      {service.content}
                    </p>
                  </div>

                  <div className="lg:w-[50%] overflow-hidden">
                    <img
                      src={service.img}
                      className="w-full h-[350px] overflow-hidden object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden mt-20 py-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="border-t-[1px] border-black/20 py-8"
          >
            <div className="flex items-center gap-4">
              <img className="h-14 w-20" src={service.img} alt="" />
              <h4 className="font-work font-semibold text-[24px] leading-[24px]">
                {service.heading}
              </h4>
            </div>
            <p className="mt-2 font-dm text-black">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
