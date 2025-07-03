import React from 'react'
import GoogleMap from '../components/GoogleMap'
import Hero from '../components/Hero';

const Contact = () => {
  const ImgUrl = "https://www.invisiblegrillmanufacturer.com/wp-content/uploads/2025/03/Balaji-Enterprises-in-Pune-invisible-grills-manufacturers-1024x768.jpg";

  const heading = "Contact Us";
  
  return (
    <>
    <Hero ImgUrl={ImgUrl} heading={heading}/>
    <GoogleMap/>
    </>
  )
}

export default Contact