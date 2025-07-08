import React from 'react'
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"

import '../css/about.css'

const About = () => {
  const ImgUrl = "https://deepthiinvisiblegrills.com/wp-content/uploads/elementor/thumbs/Contact-for-Premium-Invisible-Grills-for-Balcony-r1nc8dpk4aabbcbwtxwtoay9mqac6dhsyy1y1lrry8.webp";
  const heading = "Welcome To VIG";

  return (
    <>
      <Hero heading={heading} ImgUrl={ImgUrl} />

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
                <img src="https://avatars.githubusercontent.com/u/177138807?v=4" alt="" />
              </div>

              <div className="founder-info">
                <h2>Vyshnavi Yendluri</h2>
                <p>Founder</p>
              </div>
            </div>
            <hr />
            <div className="founder-contact">
              <h3>Contact Me</h3>
              <p><i className="fa-solid fa-phone-volume"></i> +91 90525 85999</p>
              <p><i className="fa-solid fa-envelope"></i> vyshnavi@gmail.com</p>
            </div>
          </div>
        </div>
      </div>


      <WhyChooseUs />
    </>


  )
}

export default About