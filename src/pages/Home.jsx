import React from 'react'
import Hero from '../components/Hero'
import Achievements from '../components/Achievements';
import QuickServiceRequest from '../components/QuickServiceRequest';


const Home = () => {
  const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const heroText = 'Vyshnavi Invisible Grills';


  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />
      <QuickServiceRequest/>
      <Achievements/>
    </>
  )
}

export default Home