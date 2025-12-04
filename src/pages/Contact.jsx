import React, {useState} from "react";
import emailjs from "emailjs-com";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dczvvp3",
        "template_2yqn0fl",
        formData,
        "-KtqUA7HlskvXnw6g"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:px-8 px-6 pt-28  lg:pt-40 pb-16 lg:pb-20 flex flex-col lg:flex-row h-fit lg:gap-8">
      <div className="lg:w-[45%] w-full relative">
        <img className="w-full lg:h-[400px]" src={image1} alt="" />
        <div
          className="lg:w-[48%] w-[48%] absolute right-0 -mt-12 lg:-mt-16 rounded-[17px] lg:rounded-[23px] border border-black h-12  lg:h-16 
             flex justify-center items-center lg:gap-10  overflow-hidden"
        >
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full opacity-40"
          />
          <div className="relative z-10 flex justify-center items-center gap-4 lg:gap-10">
            <img className="h-6 lg:h-8" src={instagram} alt="Instagram" />
            <img className="h-6 lg:h-8" src={linkedien} alt="LinkedIn" />
            <img className="h-6 lg:h-8" src={facebook} alt="Facebook" />
            <img className="h-6 lg:h-8" src={youtube} alt="YouTube" />
          </div>
        </div>

        <div className="w-full border-[#737373] border-[1px] rounded-[28px] mt-6 grid lg:grid-cols-2 grid-cols-2 p-6 lg:p-12 gap-y-6 lg:gap-y-6">
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={mobile} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Call Us</p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px] mt-2">
              Mon - Fri (10AM- 7PM)
            </p>
            
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={whatsapp} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] text-[16px] mt-2">Chat Support</p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px] mt-2">
              Chat to our customer 
            </p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px]">
              representative 
            </p>
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={location} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Visit Us</p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px] mt-2">
              594/1, Kodigehalli - 
            </p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px]">
              Thindlu Main Road, 
            </p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px]">
              Bengaluru- 560092.
            </p>
          </div>
          <div className="">
            <div className="bg-black w-fit p-2 rounded-[17px]">
              <img className="h-8 w-8" src={email} alt="" />
            </div>
            <p className="font-work font-medium lg:text-[16px] mt-2">Email Us</p>
            <p className="font-dm font-semibold text-[#737373] text-[12px] lg:text-[14px] mt-2">
              connect@truedoliving.com
            </p>
            
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] mt-8 lg:mt-0 rounded-[28px] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] py-6 px-4 lg:py-8 lg:px-4">
      <h3 className="font-work font-medium text-center text-[28px] lg:text-[40px] leading-none">
        Contact Us
      </h3>
      <p className="font-work text-[#737373] text-[16px] text-center font-medium">
        Our friendly team would love to hear from you.
      </p>

      <form
        onSubmit={sendEmail}
        className="mt-6 lg:mt-8 font-work bg-[#fffcf2] space-y-4 lg:space-y-8"
      >
        <div>
          <label className="font-medium">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label className="font-medium">Phone Number*</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px]"
            placeholder="Phone Number"
            required
          />
        </div>

        <div>
          <label className="font-medium">Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="lg:h-[150px] h-[150px] mt-2 w-full border-[1px] text-[#737373] placeholder:text-[#737373] border-[#737373] bg-[#fffcf2] p-4 rounded-[13px] resize-none"
            placeholder="Type your message"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#CD8A38] text-white font-dm w-full font-semibold py-4"
        >
          Send message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
