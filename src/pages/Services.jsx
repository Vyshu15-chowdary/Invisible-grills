import React from 'react'
import Hero from '../components/Hero';

const Services = () => {
  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/InvisGrilleBalcony2.jpg";

  const heading = "Your Safety, Our Priority – Invisible Grills with a View";
  return (
    <>
    <Hero  ImgUrl={ImgUrl} heading={heading}  />

    <div className='services'>
      <div className='header'>
        <h2>Premium Invisible Grills Installation & Customization</h2>
         <p>At Vyshnavi Invisible Grills, we specialize in offering top-quality invisible grill solutions designed to enhance safety without compromising style or view.
           Whether for homes,
           high-rise apartments, offices, or commercial spaces — our grills blend modern aesthetics with the highest safety standards.

</p>
      </div>


    </div>
    </>
  )
}

export default Services