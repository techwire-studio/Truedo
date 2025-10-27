import React from "react";

import image1 from "../assets/contactNew.png";
import instagram from "../assets/instagram.png";
import linkedien from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import mobile from "../assets/call-outline.png";
import whatsapp from "../assets/whatsapp.png"
import location from "../assets/location.png"
import email from "../assets/email.png"
import bgImage from "../assets/asabsdfihsdlbdshfled-3.png";

const Contact = () => {
  return (
    <div className="lg:px-8  lg:pt-40 lg:pb-20 flex h-fit lg:gap-8">
      <div className="lg:w-[45%] w-full relative">
        <img className="w-full lg:h-[400px]" src={image1} alt="" />
        <div
          className="lg:w-[48%] absolute right-0 -mt-16 rounded-[23px] border border-black h-16 
             flex justify-center items-center lg:gap-10  overflow-hidden"
        >
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full"
          />
          <div className="relative z-10 flex justify-center items-center gap-10">
            <img src={instagram} alt="Instagram" />
            <img src={linkedien} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>

        <div className="w-full border-[#737373] border-[1px] rounded-[28px] mt-6 grid lg:grid-cols-2  p-12 gap-y-6">
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={mobile} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Call Us</p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px] mt-2">
              Mon - Fri (10AM- 7PM)
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              Mon - Fri (10AM- 7PM)
            </p>
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={whatsapp} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Chat Support</p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px] mt-2">
              Chat to our customer 
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              representative (24*7)
            </p>
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={location} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Visit site</p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px] mt-2">
              594/1, Kodigehalli - 
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              Thindlu Main Road, 
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              Bengaluru- 560092.
            </p>
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={email} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Email Us</p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px] mt-2">
              594/1, Kodigehalli - 
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              Thindlu Main Road, 
            </p>
            <p className="font-dm font-semibold text-[#737373] lg:text-[14px]">
              Bengaluru- 560092.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] rounded-[28px] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] lg:py-8 lg:px-4">
        <h3 className="font-work font-medium text-center lg:text-[40px] leading-none">
          Contact Us
        </h3>
        <p className="font-work text-[#737373] text-center font-medium">
          Our friendly team would love to hear from you.
        </p>
        <form className="mt-8 font-work bg-[#fffcf2] lg:space-y-8" action="">
          <div>
            <label className="font-medium" htmlFor="">
              Name*
            </label>
            <input
              type="text"
              className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Email*
            </label>
            <input
              type="text"
              className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Phone Number*
            </label>
            <input
              type="text"
              className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="">
              Message*
            </label>
            <textarea
              type="text"
              className="lg:h-[150px] mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px] resize-none"
              placeholder="Type your message"
              required
            />
          </div>
          <button className="bg-[#CD8A38] text-white font-dm w-full font-semibold py-4">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
