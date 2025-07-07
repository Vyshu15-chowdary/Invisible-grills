import React from 'react'
import Hero from '../components/Hero'
import Achievements from '../components/Achievements';
import QuickServiceRequest from '../components/QuickServiceRequest';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';


const Home = () => {
  const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const heroText = 'Vyshnavi Invisible Grills';


  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />
      <QuickServiceRequest/>
      <WhyChooseUs/>
      <Achievements/>
      <Reviews/>
    </>
  )
}

export default Home