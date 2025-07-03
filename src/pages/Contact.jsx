import React from 'react'
import GoogleMap from '../components/GoogleMap'
import Hero from '../components/Hero';

const Contact = () => {
  const ImgUrl = "https://hangerswala.com/wp-content/uploads/2025/05/assets_task_01jv1v3z1dfjs8c6zszwdbcdsh_1747040025_img_0.webp";

  const heading = "Contact Us";

  return (
    <>
    <Hero ImgUrl={ImgUrl} heading={heading}/>
    <GoogleMap/>
    </>
  )
}

export default Contact