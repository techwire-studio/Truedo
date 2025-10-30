import React from 'react'
import Featured from '../components/Featured'
import HomeText from '../components/HomeText'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import KnowMore from '../components/KnowMore'
import Contact from '../components/Contact'

const Hero = React.lazy(()=> import('../components/Hero'))

const Home = () => {
  return (
    <div>
        <Hero />
        <HomeText />
        <Featured />
        <Services />
        <WhyUs />
        {/* <KnowMore /> */}
        <Contact />
    </div>
  )
}

export default Home