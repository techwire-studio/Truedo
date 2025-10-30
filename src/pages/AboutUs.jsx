import React from 'react'

import img1 from "../assets/about-us-1.png"
import img2 from "../assets/about-us-2.png"
import exp1 from "../assets/Experience1.png"
import service from "../assets/AboutService.png"
import Contact from '../components/Contact'

const experiences = [exp1,exp1,exp1,exp1]

const services = [
    {
        heading:"Quality",
        description:"Quality without compromise in every grain, every gloss.From premium materials to meticulous finishes, we ensure excellence that endures."
    },
    {
        heading:"Transparency",
        description:"Transparency that builds trust — with honest pricing, clear timelines, and no hidden surprises."
    },
    {
        heading:"INNOVATION",
        description:"Innovation that inspires — where modern technology meets smart, purposeful design."
    },
    {
        heading:"CUSTOMER FIRST",
        description:"Customer First — because every home should reflect your story, your style, and your way of living."
    },
]

const AboutUs = () => {
  return (
    <div className='lg:px-8 px-6 lg:pt-40 pt-24' >
        {/* Section 1 */}
        <div className=''>
            <h1 className='font-work font-medium text-[64px] lg:text-[118px] -tracking-wider leading-none p-0 m-0'>ABOUT</h1>
            <div className='flex flex-col lg:flex-row lg:gap-4 h-fit'>
                <div className='lg:w-[15%] flex flex-col justify-between'>
                    <div>
                        <h1 className='font-work font-medium text-[64px] lg:text-[118px] -tracking-wider leading-none p-0 m-0'>US</h1>
                    <p className='font-work font-medium text-[#737373] lg:text-[16px] leading-[20px] text-[18px] -tracking-[3%] text-justify mt-2'>Spaces that anticipate, <br /> adapt, and inspire.</p>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <p className='font-dm font-semibold lg:leading-[37px] leading-[20px] text-[22px] lg:text-[28px]'>We don’t <br /> decorate <br /> spaces. We compose experiences.</p>
                    </div>
                </div>
                <div className='lg:w-[60%] py-8 lg:py-0'>
                    <img className='lg:h-[450px] w-full' src={img1} alt="" />
                </div>
                <div className='lg:w-[25%] flex flex-col-reverse lg:flex-col justify-between'>
                    <div className='mt-6 lg:mt-0'>
                        <img className='w-full' src={img2} alt="" />
                    
                    </div>
                    <div>
                        <h5 className='font-work font-medium text-[#737373] lg:text-[40px] text-[32px] mt-2'>True Philosophy</h5>
                        <p className='font-work font-medium text-[#737373] lg:text-[18px] text-[18px] leading-[20px] lg:leading-[27.9px] -tracking-[6%] text-justify'>Every decision intentional, every space thoughtfully orchestrated, every home a reflection of its people.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Section 2 */}
        <div className='bg-[#F9F7F3] lg:my-12 rounded-[32px] py-8'>
                <div className='lg:flex justify-between items-center'>
                    <div>
                        <h5 className='font-work font-semibold leading-none text-[28px] lg:text-[36px]'>The Curators <br /> Of Experience</h5>
                    </div>
                    <div>
                        <p className='font-work text-[#737373] font-medium text-[16px] mt-4 lg:mt-0 lg:text-[16px] leading-[20.9px]'>We shape interiors with intention, <br /> orchestrate spaces with care, <br /> and create homes that feel effortlessly <br /> lived-in.</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full mt-6'>
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
        <div className='w-full flex flex-col lg:flex-row lg:gap-16'>
            <div className='lg:w-[50%]'>
                    <h4 className='font-work font-semibold text-[42px] lg:text-[56px] -tracking-[6%]'>True Promise</h4>
                    <div className=' mt-2'>
                        <p className='font-dm lg:text-[18px] lg:w-[80%]'>
                            Interiors designed to respond to the way you live. From concept to completion, Truedo blends function, artistry, and precision to craft spaces that feel effortless, personal, and timeless.

                        </p>
                    </div>
                    <div className='mt-6 lg:mt-12'>
                        <img className='w-full lg:h-[400px] object-cover rounded-[21px]' src={service} alt="" />
                    </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap-8 lg:gap-0 mt-8 lg:mt-0 justify-between'>
                {
                    services.map((service,index) => (
                        <div key={index}>
                            <h5 className='font-dm font-bold text-[24px] lg:text-[28px] tracking-[4px]'>{service.heading}</h5>
                            <p className='font-dm tracking-[8%] lg:leading-[31px] lg:text-[22px] mt-2 lg:mt-4 font-light text-[#737373]'>{service.description}</p>
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