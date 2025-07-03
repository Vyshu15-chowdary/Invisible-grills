import React from 'react'
import "../css/hero02.css"

const Hero02 = ({heading, ImgUrl}) => {

    const hero02Style = {
         backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.356)), url(${ImgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

  return (
    <div className='hero02' style={hero02Style}>
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero02