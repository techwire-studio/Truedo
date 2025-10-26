import React from 'react'

import img1 from "../assets/about-us-1.png"
import img2 from "../assets/about-us-2.png"
import exp1 from "../assets/Experience1.png"
import service from "../assets/AboutService.png"
import Contact from '../components/Contact'

const experiences = [exp1,exp1,exp1,exp1]

const services = [
    {
        heading:"Modular Kitchen",
        description:"Our modular kitchen designs blend style, functionality, and smart space utilization. With sleek layouts, high-quality finishes, and innovative storage solutions,"
    },
    {
        heading:"Modular Kitchen",
        description:"Our modular kitchen designs blend style, functionality, and smart space utilization. With sleek layouts, high-quality finishes, and innovative storage solutions,"
    },
    {
        heading:"Modular Kitchen",
        description:"Our modular kitchen designs blend style, functionality, and smart space utilization. With sleek layouts, high-quality finishes, and innovative storage solutions,"
    }
]

const AboutUs = () => {
  return (
    <div className='lg:px-8 lg:pt-48'>
        {/* Section 1 */}
        <div>
            <h1 className='font-work font-medium lg:text-[118px] -tracking-wider leading-none p-0 m-0'>ABOUT</h1>
            <div className='flex lg:gap-4 h-fit'>
                <div className='lg:w-[15%] flex flex-col justify-between'>
                    <div>
                        <h1 className='font-work font-medium lg:text-[118px] -tracking-wider leading-none p-0 m-0'>US</h1>
                    <p className='font-work font-medium text-[#737373] lg:text-[16px] leading-[20px] -tracking-[3%] text-justify mt-2'>Spaces that anticipate, <br /> adapt, and inspire.</p>
                    </div>
                    <div>
                        <p className='font-dm font-semibold leading-[37px] lg:text-[28px]'>We don’t <br /> decorate <br /> spaces. We compose experiences.</p>
                    </div>
                </div>
                <div className='lg:w-[60%]'>
                    <img className='lg:h-[450px] w-full' src={img1} alt="" />
                </div>
                <div className='lg:w-[25%] flex flex-col justify-between'>
                    <div>
                        <img className='w-full' src={img2} alt="" />
                    <h5 className='font-work font-medium text-[#737373] lg:text-[40px] mt-2'>True Philosophy</h5>
                    </div>
                    <div>
                        <p className='font-work font-medium text-[#737373] lg:text-[18px] leading-[27.9px] -tracking-[6%] text-justify'>Every decision intentional, every space thoughtfully orchestrated, every home a reflection of its people.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Section 2 */}
        <div className='bg-[#F9F7F3] lg:my-12 rounded-[32px] py-8'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h5 className='font-work font-semibold leading-none lg:text-[36px]'>The Curators <br /> of Experience</h5>
                    </div>
                    <div>
                        <p className='font-work text-[#737373] font-medium lg:text-[16px] leading-[20.9px]'>We shape interiors with intention, <br /> orchestrate spaces with care, <br /> and create homes that feel effortlessly <br /> lived-in.</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 lg:gap-8 w-full mt-6'>
                    {
                        experiences.map((experience,index) => (
                            <div key={index}>
                                <img className='w-full lg:h-[400px]' src={experience} alt="" />
                            </div>
                        ))
                    }
                </div>
        </div>
        {/* Section 3 */}
        <div className='w-full flex lg:gap-16'>
            <div className='lg:w-[50%]'>
                    <h4 className='font-work font-semibold lg:text-[56px] -tracking-[6%]'>True Services</h4>
                    <div className=' mt-2'>
                        <p className='text-[#737373] font-work font-medium lg:text-[24px]'>At Truedo Living Spaces, we transform houses into  timeless homes.</p>
                        <p className='text-[#737373] font-work font-medium lg:text-[24px]'>At Truedo Living Spaces, we transform houses into  timeless homes.</p>
                    </div>
                    <div className=' mt-12'>
                        <img className='w-full lg:h-[350px] object-cover rounded-[21px]' src={service} alt="" />
                    </div>
            </div>
            <div className='lg:w-1/2 flex flex-col justify-between'>
                {
                    services.map((service,index) => (
                        <div key={index}>
                            <h5 className='font-dm font-bold lg:text-[28px] tracking-[4px]'>{service.heading}</h5>
                            <p className='font-dm tracking-[8%] leading-[31px] lg:text-[22px] mt-6 font-light'>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <Contact />
    </div>
  )
}

export default AboutUs