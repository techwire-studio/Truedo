import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "../assets/logoMain1.png";
import logo2 from "../assets/logoMain2.png";
import blackLogo1 from "../assets/logoMain1Black.png";
import blackLogo2 from "../assets/logoMain2Black.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  // const isServices = location.pathname === "/our-services";
  // const isContact = location.pathname === "/contact";
  // const isAbout = location.pathname === "/about-us";
  const isHome = location.pathname === "/";

  const isActive = (route) => path === route;

  const [menuOpen, setMenuOpen] = useState(false);

  // 🧩 Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div>
      <div
        className={`hidden font-dm uppercase absolute top-4 left-1/2 z-20 px-16 py-4 gap-16 font-medium lg:flex items-center justify-center transform -translate-x-1/2 rounded-[14px] 
      ${
        isActive("/our-services") ||
        isActive("/contact") ||
        isActive("/about-us")
          ? "border-black text-black"
          : "border-[#FFFCF2] text-[#FFFCF2]"
      }
       lg:text-[14px]`}
      >
        <a
          href="/"
          className={`transition-all duration-200 ${
            isActive("/") ? "font-bold text-[16px] " : "opacity-60"
          }`}
        >
          Home
        </a>

        <a
          href="/our-services"
          className={`transition-all duration-200 ${
            isActive("/our-services") ? "font-bold text-[16px]" : "opacity-60"
          }`}
        >
          Services
        </a>

        <a
          href="/about-us"
          className={`transition-all duration-200 ${
            isActive("/about-us") ? "font-bold text-[16px] " : "opacity-60"
          }`}
        >
          About Us
        </a>

        <a
          href="/contact"
          className={`transition-all duration-200 ${
            isActive("/contact") ? "font-bold text-[16px]" : "opacity-60"
          }`}
        >
          Contacts
        </a>
      </div>
      {/* Mobile */}
      <div>
        {/* ===== Header Bar ===== */}
        <div
          className={`lg:hidden flex items-center justify-between  left-0 w-full z-50 px-8 transition-all duration-300 
      ${
        menuOpen
          ? "fixed top-6 bg-transparent py-0"
          : isHome
          ? "fixed top-6 py-0 bg-transparent"
          : "fixed top-6 py-0 bg-transparent"
      }
    `}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img
                  className="w-[30px] h-[30px]"
                  src={menuOpen ? logo1 : isHome ? logo1 : blackLogo1}
                  alt="Logo 1"
                />
                <img
                  className="h-[20px] w-[100px]"
                  src={menuOpen ? logo2 : isHome ? logo2 : blackLogo2}
                  alt="Logo 2"
                />
              </div>
            </Link>
          </div>

          {/* Menu / Close Button */}
          <div
            className="cursor-pointer transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#fff"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={isHome ? "#fff" : "#000"}
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        {/* ===== Full Screen Menu ===== */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed font-dm inset-0 uppercase bg-black/70 backdrop-blur-sm text-white flex flex-col justify-between pt-28 pb-4 z-40"
            >
              {/* Menu Items */}
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[24px] space-y-4 flex flex-col font-semibold px-8"
              >
                <a href="/" className=" duration-300">
                  Home
                </a>
                <a href="/our-services" className="duration-300">
                  Services
                </a>
                <a href="/about-us" className="duration-300">
                  About us
                </a>
                <a href="/contact" className="duration-300">
                  Contact
                </a>
              </motion.ul>

              <div className="bg-white text-black text-[18px] font-semibold px-10 mx-auto py-3 rounded-full text-center w-[90%] cursor-pointer hover:bg-[#C8ACD6] hover:text-white duration-300">
                Get In Touch
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
