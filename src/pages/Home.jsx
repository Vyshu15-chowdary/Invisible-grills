import React from 'react'
import Hero from '../components/Hero'
import Achievements from '../components/Achievements';
import QuickServiceRequest from '../components/QuickServiceRequest';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';


const Home = () => {
  // const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const ImgUrl = "https://img1.wsimg.com/isteam/ip/6f7e5f7e-258d-43d3-9e4c-a0beace29963/invisible%20grill%20in%20surat.png/:/cr=t:17.57%25,l:0%25,w:100%25,h:66.01%25/rs=w:814,h:407,cg:true/fx-gs";
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