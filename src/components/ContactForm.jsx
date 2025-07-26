import React, { useEffect } from 'react'
import GoogleMap from '../components/GoogleMap'
import Hero from '../components/Hero';
import Achievements from "../components/Achievements.jsx"
import ContactForm from '../components/ContactForm.jsx';

const Contact = () => {
  const ImgUrl = "https://hangerswala.com/wp-content/uploads/2025/05/assets_task_01jv1v3z1dfjs8c6zszwdbcdsh_1747040025_img_0.webp";
  const heading = "Contact Us";

  useEffect(()=>{
    document.title = "Contact Us"

  }, [])
  return (
    <>
    <Hero ImgUrl={ImgUrl} heading={heading}/>
 
    <ContactForm/>
    <Achievements/>
    <GoogleMap/>
    </>
  )
}

export default Contact