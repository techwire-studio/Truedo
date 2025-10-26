import React from 'react'

import image1 from "../assets/contactNew.png"
import instagram from "../assets/instagram.png"
import linkedien from "../assets/linkedin.png"
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import mobile from "../assets/call-outline.png"

const Contact = () => {
  return (
    <div className='lg:px-8  lg:pt-40 lg:pb-20 flex h-fit lg:gap-8'>
        <div className='lg:w-[45%] w-full relative'>
            <img className='w-full lg:h-[400px]' src={image1} alt="" />
            <div className='lg:w-[48%] absolute right-0 -mt-16  rounded-[23px] border-[1px] border-black h-16 bg-white flex  justify-center items-center lg:gap-10'>
                <img src={instagram} alt="" />
                <img src={linkedien} alt="" />
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
            </div>
            <div className='w-full border-[#737373] border-[1px] rounded-[28px] mt-6 grid lg:grid-cols-2 p-12 gap-y-6'>
                <div className=''>
                    <div className='bg-black w-fit p-2 rounded-[17px]'>
                      <img src={mobile} alt="" />
                    </div>
                    <p className='font-work font-medium lg:text-[16px] mt-2'>Call Us</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px] mt-2'>Mon - Fri (10AM- 7PM)</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px]'>Mon - Fri (10AM- 7PM)</p>
                </div>
                <div className=''>
                    <div className='bg-black w-fit p-2 rounded-[17px]'>
                      <img src={mobile} alt="" />
                    </div>
                    <p className='font-work font-medium lg:text-[16px] mt-2'>Call Us</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px] mt-2'>Mon - Fri (10AM- 7PM)</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px]'>Mon - Fri (10AM- 7PM)</p>
                </div>
                <div className=''>
                    <div className='bg-black w-fit p-2 rounded-[17px]'>
                      <img src={mobile} alt="" />
                    </div>
                    <p className='font-work font-medium lg:text-[16px] mt-2'>Call Us</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px] mt-2'>Mon - Fri (10AM- 7PM)</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px]'>Mon - Fri (10AM- 7PM)</p>
                </div>
                <div className=''>
                    <div className='bg-black w-fit p-2 rounded-[17px]'>
                      <img src={mobile} alt="" />
                    </div>
                    <p className='font-work font-medium lg:text-[16px] mt-2'>Call Us</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px] mt-2'>Mon - Fri (10AM- 7PM)</p>
                    <p className='font-dm font-semibold text-[#737373] lg:text-[14px]'>Mon - Fri (10AM- 7PM)</p>
                </div>
            </div>
        </div>
        <div className="lg:w-[55%] rounded-[28px] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] lg:py-8 lg:px-4">
          <h3 className='font-work font-medium text-center lg:text-[40px] leading-none'>Contact Us</h3>
          <p className='font-work text-[#737373] text-center font-medium'>Our friendly team would love to hear from you.</p>
          <form className='mt-8 font-work bg-[#fffcf2] lg:space-y-8' action="">
            <div>
              <label className='font-medium' htmlFor="">Name*</label>
            <input type="text" className='mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]'
            placeholder='Enter your name*'
            required
            />
            </div>
             <div>
              <label className='font-medium' htmlFor="">Name*</label>
            <input type="text" className='mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]'
            placeholder='Enter your name*'
            required
            />
            </div>
             <div>
              <label className='font-medium' htmlFor="">Name*</label>
            <input type="text" className='mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]'
            placeholder='Enter your name*'
            required
            />
            </div>
             <div>
              <label className='font-medium' htmlFor="">Name*</label>
            <textarea type="text" className='lg:h-[150px] mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px] resize-none'
            placeholder='Enter your name*'
            required
            />
            </div>
            <button className='bg-[#CD8A38] text-white font-dm w-full font-semibold py-4'>
              Send message
            </button>
          </form>
        </div>
    </div>
  )
}

export default Contact