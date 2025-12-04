import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "../assets/logoMain1.png";
import logo2 from "../assets/logoMain2.png";
import logoWhite from "../assets/logoWhite.png";
import blackLogo2 from "../assets/logoMain2Black.png";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/our-services" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Profile",
    path: "https://drive.google.com/file/d/1dFf9QhlYk-wcngq_PKxfsQ2G9yRAjqfy/view?usp=sharing",
    external: true,
  },
  { label: "Contact Us", path: "/contact" },
];

const NavLinkItem = ({ item, isHome = true }) => {
  const hoverColor = isHome ? "hover:text-white" : "hover:text-black";

  const base = `transition-all whitespace-nowrap duration-200 opacity-60 hover:opacity-100 ${hoverColor}`;

  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.path} className={base}>
      {item.label}
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const isActiveRoute = (route) => route === pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div>
      {/* -------------------- Desktop Header -------------------- */}
      <Link to="/">
        <div className="cursor-pointer hidden font-dm uppercase absolute top-4 left-8 z-20 px-0 py-4 gap-2 items-center font-medium lg:flex">
          <img className="h-10 w-10" src={logo1} alt="Logo" />
          <img className="h-6" src={isHome ? logo2 : blackLogo2} alt="Brand" />
        </div>
      </Link>

      <div
        className={`hidden font-dm uppercase absolute top-4 left-1/2 z-20 px-16 py-4 gap-16 font-medium lg:flex items-center justify-center transform -translate-x-1/2 rounded-[14px]
          ${
            isActiveRoute("/our-services") ||
            isActiveRoute("/about-us") ||
            isActiveRoute("/contact")
              ? "border-black text-black"
              : "border-[#FFFCF2] text-[#FFFCF2]"
          }
          lg:text-[14px]`}
      >
        {NAV_ITEMS.map((item) => (
          <NavLinkItem key={item.label} item={item} isHome={isHome} />
        ))}
      </div>

      {/* -------------------- Mobile Header -------------------- */}
      <div>
        {/* Top Bar */}
        <div
          className={`lg:hidden flex items-center justify-between left-0 w-full z-50 px-6 transition-all duration-300 backdrop-blur-sm 
            fixed top-0 py-3 bg-transparent`}
          style={{
            background:
              "linear-gradient(180deg,rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.49) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img className="w-[30px] h-[30px]" src={logoWhite} alt="Logo" />
              <img
                className="h-[20px] w-[100px]"
                src={logo2}
                alt="Brand Logo"
              />
            </div>
          </Link>

          {/* Toggle Button */}
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
                stroke="#fff"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed font-dm inset-0 uppercase bg-black/70 backdrop-blur-sm text-white flex flex-col justify-between pt-28 pb-4 z-40"
            >
              <motion.ul
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[24px] space-y-4 flex flex-col font-semibold px-6"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLinkItem key={item.label} item={item} />
                ))}
              </motion.ul>

              <Link to="/contact">
                <div
                  onClick={() => setMenuOpen(false)}
                  className="bg-white text-black text-[18px] font-semibold px-10 mx-auto py-3 rounded-full text-center w-[90%] cursor-pointer duration-300"
                >
                  Get In Touch
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
