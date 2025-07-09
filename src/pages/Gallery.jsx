import React from 'react'
import Hero from '../components/Hero';
import RawMaterial from '../components/RawMaterial.jsx';

const Gallery = () => {
  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/Balcony.jpg";

  const heading = "Gallery";
  return (
    <>
    <Hero ImgUrl={ImgUrl} heading={heading}/>
    <RawMaterial />
    </>
  )
}

export default Gallery