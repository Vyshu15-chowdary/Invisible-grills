import React from 'react'
import Hero from '../components/Hero';

const Services = () => {
  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/InvisGrilleBalcony2.jpg";

  const heading = "Our Services";
  return (
    <>
    <Hero  ImgUrl={ImgUrl} heading={heading}  />
    </>
  )
}

export default Services