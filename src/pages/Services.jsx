import React from 'react'
import Hero from '../components/Hero';
import '../css/Services.css'
const Services = () => {
  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/InvisGrilleBalcony2.jpg";

  const heading = "Your Safety, Our Priority – Invisible Grills with a View";
  return (
    <>
    <Hero  ImgUrl={ImgUrl} heading={heading}  />

    <div className='services'>
      <div className='header1'>
        <h2>Premium Invisible Grills Installation & Customization</h2>
         <p>At Vyshnavi Invisible Grills, we specialize in offering top-quality invisible grill solutions designed to enhance safety without compromising style or view.
           Whether for homes,
           high-rise apartments, offices, or commercial spaces — our grills blend modern aesthetics with the highest safety standards.

</p>
      </div>

      <div className='service1'>
        <h2>🏢 Residential Invisible Grills</h2>
        <img src="./img3.webp" alt="img"></img>
        <p>Secure your balconies, windows, and open spaces with our rust-proof and child-safe invisible grills. Ideal for apartments, villas, and gated communities.

          <b>Features:</b>

          2mm to 3mm high-tensile SS 316 marine-grade cables

          Up to 300 kg tensile strength

          Gap customization (2", 3", 4" as per safety needs)

          Sleek, nearly invisible design

          Corrosion-resistant and weatherproof</p>

         
      </div>


    </div>
    </>
  )
}

export default Services