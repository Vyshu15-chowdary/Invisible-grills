import React from 'react'
import Hero from '../components/Hero'
import Achievements from '../components/Achievements';
import QuickServiceRequest from '../components/QuickServiceRequest';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';


const Home = () => {
  // const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
 // const ImgUrl = "https://thumbs.dreamstime.com/b/create-professional-inspiring-home-office-background-your-online-meetings-light-airy-minimalist-design-elevate-presence-371816809.jpg";
 const ImgUrl ="https://chennaiinvisiblegrillforbalcony.com/img/invisible-grill-2.jpg"
  const heroText = 'VYSHNAVI  INVISIBLE GRILLS ';


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