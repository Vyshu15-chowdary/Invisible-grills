import React, { useEffect } from 'react'
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"

import '../css/About.css'
import { FOUNDER_EMAIL, FOUNDER_IMAGE, FOUNDER_NAME, FOUNDER_PHONE } from '../../constant'

const About = () => {

 {/* const ImgUrl = "https://deepthiinvisiblegrills.com/wp-content/uploads/elementor/thumbs/Contact-for-Premium-Invisible-Grills-for-Balcony-r1nc8dpk4aabbcbwtxwtoay9mqac6dhsyy1y1lrry8.webp";*/}
 const ImgUrl = "https://ehomes.com.sg/wp-content/uploads/2022/07/PHOTO-2021-10-23-13-51-51-1.jpg";
  const heading = "About Us";

  useEffect(() => {
    document.title = "About Us"
  }, [])
  return (
    <>
      <Hero heading={heading} ImgUrl={ImgUrl} />

      <WhyChooseUs />

      <div className="about-us">
        <div className="about-wrapper">
          <div className="txt-wrapper">

            <h2>What We Do?</h2>
            <hr />

            <p>At Vyshnavi Invisible Grills, we redefine safety with elegance.
              Specializing in high-quality invisible grill installations,
              we offer modern, secure, and stylish solutions for : </p>

            <ul>
              <li>Home</li>
              <li>Apartments</li>
              <li>Balconies</li>
              <li>Windows</li>
              <li>Commercial Spaces</li>
            </ul>

          </div>

          <div className="founder">
            <div className="founder-wrapper">
              <div className="founder-img">
                <img src={FOUNDER_IMAGE} alt="" />
              </div>

              <div className="founder-info">
                <h2>{FOUNDER_NAME}</h2>
                <p>Founder</p>
              </div>
            </div>
            <hr />
            <div className="founder-contact">
              <h3>Contact Me</h3>
              <p><i className="fa-solid fa-phone-volume"></i> {FOUNDER_PHONE}</p>
              <p><i className="fa-solid fa-envelope"></i> {FOUNDER_EMAIL}</p>
            </div>
          </div>
        </div>
      </div>


    </>


  )
}

export default About