import React from 'react'
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import '../css/about.css'

const About = () => {
  const ImgUrl = "https://deepthiinvisiblegrills.com/wp-content/uploads/elementor/thumbs/Contact-for-Premium-Invisible-Grills-for-Balcony-r1nc8dpk4aabbcbwtxwtoay9mqac6dhsyy1y1lrry8.webp";
  const heading = "Welcome To VIG";

  return (
    <>
    <Hero heading={heading} ImgUrl={ImgUrl}/>

    <div className="about-us">
      <div className="about-content">
        <h2>What Do We Do?</h2>
        <p>At Vyshnavi Invisible Grills, we redefine safety with elegance. <br />
              Specializing in high-quality invisible grill installations,
              we offer modern, secure, and stylish solutions for : </p>

              <ul>
                <li>Home</li>
                <li>Apartments</li>
                <li>Balconies</li>
                <li>Windows</li>
                <li>Commercial Spaces</li>
              </ul>
            <p>  Our invisible grills are made from premium-grade stainless steel coated with nylon for added durability,</p>
            <p>  strength, and rust-resistance—ensuring safety without compromising your view.
              With a commitment to excellence and customer satisfaction,
              we tailor every project to your needs, providing sleek protection for your loved ones—especially
              children and pets—while enhancing the aesthetics of your living space.</p>
      </div>
    </div>
      
      <WhyChooseUs/>
    </>


  )
}

export default About