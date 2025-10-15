import React from 'react'
import footerLogo from "../assets/footerLogo.png"
import pin from "../assets/Pin.png"
import arrow from "../assets/Arrow 1.png"
import arrowUp from "../assets/Arrow 5.png"

const Footer = () => {
  return (
    <div className='w-full bg-[#202B1A] px-8 py-12  font-dm'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-8'>
            <img className='h-[120px] w-auto' src={footerLogo} alt="" />
            <span className='flex gap-2 text-white items-center font-dm text-[14px]'>
                <img src={pin} alt="" />
                <p className='leading-4'>594/1, Kodigehalli - Thindlu <br /> Main Road, Bengaluru- 560092.</p>
            </span>
             <button
            className="relative font-dm bg-[#CD8A38] text-white w-fit px-8 py-4 font-semibold tracking-wide  transition-colors"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 0px) 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)",
            }}
          >
            CONTACT US
            <span className="ml-2 inline-block -rotate-45">→</span>
          </button>
        </div>
        <div>
            <div className='font-semibold'>
                <span className='flex items-center gap-4'>
                    <p className='text-white font-dm text-[32px]'>Instagram</p>
                    <img src={arrow} alt="" />
                </span>
                <span className='flex items-center gap-4'>
                    <p className='text-white font-dm text-[32px]'>Facebook</p>
                    <img src={arrow} alt="" />
                </span>
                <span className='flex items-center gap-4'>
                    <p className='text-white font-dm text-[32px]'>WhatsApp</p>
                    <img src={arrow} alt="" />
                </span>
                <span className='flex items-center gap-4'>
                    <p className='text-white font-dm text-[32px]'>Email</p>
                    <img src={arrow} alt="" />
                </span>
            </div>
            <button className='bg-[#CD8A38]/25 text-white/75 font-dm font-semibold mt-8 px-8 py-2 text-[24px] flex items-center gap-4'>
                Back To Top
                <img src={arrowUp} alt="" />
            </button>
        </div>
        </div>

        <p className='text-center font-dm text-[#efefef] mt-8 text-[14px]'>Copyright © 2025 Truedo. All rights reserved</p>
        
    </div>
  )
}

export default Footer