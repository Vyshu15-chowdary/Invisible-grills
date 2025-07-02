import React from 'react'
import Hero from '../components/Hero'
import GoogleMap from '../components/GoogleMap';

const Home = () => {
  const ImgUrl = 'https://www.rohitaluminium.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-14-at-3.44.44-PM.jpeg';
  const heroText = 'Welcome To Home Page.';
  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />
      <GoogleMap/>
    </>
  )
}

export default Home