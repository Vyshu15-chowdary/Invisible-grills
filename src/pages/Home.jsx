import React from 'react'
import Hero from '../components/Hero'
import Achievements from '../components/Achievements';


const Home = () => {
  const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const heroText = 'Welcome To Home Page.';


  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />
      <Achievements/>
    </>
  )
}

export default Home