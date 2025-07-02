import React from 'react'
import Hero from '../components/Hero'


const Home = () => {
  const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const heroText = 'Welcome To Home Page.';


  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />

    </>
  )
}

export default Home