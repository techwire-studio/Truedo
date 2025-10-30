import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "../assets/logoMain1.png";
import logo2 from "../assets/logoMain2.png";
import blackLogo1 from "../assets/logoMain1Black.png";
import blackLogo2 from "../assets/logoMain2Black.png";

const Header = () => {
  const location = useLocation();
  const isServices = location.pathname === "/our-services";
  const isContact = location.pathname === "/contact";
  const isAbout = location.pathname === "/about-us";
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  // 🧩 Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const [scrolled, setScrolled] = useState(false);

  // 🧩 Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`hidden  font-dm uppercase absolute top-16 left-1/2 z-20 px-16 py-4 gap-16 font-medium lg:flex items-center justify-center transform -translate-x-1/2 rounded-[14px] 
      ${
        isServices || isContact || isAbout
          ? "border-black text-black"
          : "border-[#FFFCF2] text-[#FFFCF2]"
      } 
      border-[1px] lg:text-[14px]`}
      >
        <a href="/">Home</a>
        <a href="/our-services">Services</a>
        <a href="/about-us">About Us</a>
        <a href="/contact">Contacts</a>
      </div>
      {/* Mobile */}
      <>
        {/* ===== Header Bar ===== */}
        <div
          className={`lg:hidden flex items-center justify-between fixed left-0 w-full z-50 px-8 transition-all duration-300 ${
            menuOpen
              ? "bg-transparent py-0 top-8"
              : scrolled
              ? isHome
                ? "top-0 py-4 backdrop-blur-lg bg-black/50"
                : "top-0 py-4 backdrop-blur-lg bg-white/70"
              : isHome
              ? "top-8 py-0 bg-transparent"
              : "top-8 py-0 bg-transparent"
          }`}
        >
          {/* Logo */}
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

          {/* Menu / Close Button */}
          <div
            className="cursor-pointer transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // ❌ Close icon (always white when menuOpen)
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
              className={`fixed font-dm  inset-0 uppercase bg-black/70 backdrop-blur-sm text-white flex flex-col justify-between pt-28 pb-4  z-40`}
            >
              {/* Menu Items */}
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[24px] space-y-0 flex flex-col font-semibold px-8"
              >
                <a
                  href="/"
                  className="hover:text-[#C8ACD6] transition-colors duration-300 cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="/our-services"
                  className="hover:text-[#C8ACD6] transition-colors duration-300 cursor-pointer"
                >
                  Services
                </a>
                <a
                  href="about-us"
                  className="hover:text-[#C8ACD6] transition-colors duration-300 cursor-pointer"
                >
                  About us
                </a>
                <a
                  href="/contact"
                  className="hover:text-[#C8ACD6] transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </motion.ul>

              {/* Centered Button */}
              <div className="bg-white text-black text-[18px] font-semibold px-10 mx-auto py-3 rounded-full text-center w-[90%] cursor-pointer hover:bg-[#C8ACD6] hover:text-white transition-all duration-300">
                Get In Touch
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default Header;
