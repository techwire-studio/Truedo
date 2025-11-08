import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import footerLogo1 from "../assets/footerLogo1.png"
import footerLogo2 from "../assets/footerLogo2.png"
import pin from "../assets/Pin.png"
import arrow from "../assets/Arrow 1.png"
import arrowUp from "../assets/Arrow 5.png"
import logoGroup from "../assets/logoGroup.png"

const Footer = () => {
  const location = useLocation()
  const isContact = location.pathname === "/contact"

  // 🔹 Hide footer on Contact page
  if (isContact) return null

  return (
    <div className='w-full bg-[#202B1A] px-8 py-12 font-dm'>
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Left side */}
        <div className='flex flex-col gap-6 lg:gap-8'>
          {/* <img className='h-[120px] w-[200px] lg:h-[120px] lg:w-auto' src={footerLogo} alt="" /> */}
          <div>
            {/* <img className='lg:h-[70px] lg:w-[70px] h-[60px] w-[60px]' src={footerLogo1} alt="" />
          <img className='lg:h-[50px] h-[40px] w-[240px] lg:w-[250px] mt-2' src={footerLogo2} alt="" /> */}
          <img className='lg:h-[70px] h-[60px] lg:w-auto' src={logoGroup} alt="" />
          </div>
          <span className='flex gap-2 text-white items-center font-dm text-[14px]'>
            <img className='h-6 lg:h-6' src={pin} alt="" />
            <p className='leading-4 text-[12px] lg:text-[16px]'>
              594/1, Kodigehalli - Thindlu <br /> Main Road, Bengaluru- 560092.
            </p>
          </span>
          <Link
          to="/contact"
          >
          
          <button
            
            className="relative font-dm bg-[#CD8A38] text-white w-fit px-8 py-4 font-semibold tracking-wide transition-colors"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            CONTACT US
            <span className="ml-2 inline-block -rotate-45">→</span>
          </button>
          </Link>
        </div>

        {/* Right side */}
        <div>
          <div className="font-semibold space-y-3 mt-8 lg:mt-0">
            {[
              { name: "Instagram", url: "https://instagram.com/yourusername" },
              { name: "Facebook", url: "https://facebook.com/yourusername" },
              { name: "WhatsApp", url: "https://wa.me/yourNumber" },
              { name: "Email", url: "mailto:youremail@example.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <p className="text-white font-dm text-[24px] transition-colors duration-300 group-hover:text-[#CD8B3B]">
                  {item.name}
                </p>
                <img
                  src={arrow}
                  alt=""
                  className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>

          <button className='bg-[#CD8A38]/25 text-white/75 font-dm font-semibold mt-8 px-8 py-2 text-[24px] flex items-center gap-4'>
            Back To Top
            <img src={arrowUp} alt="" />
          </button>
        </div>
      </div>

      <p className='text-center font-dm text-[#efefef] mt-8 text-[14px]'>
        Copyright © 2025 Truedo. All rights reserved
      </p>
    </div>
  )
}

export default Footer
