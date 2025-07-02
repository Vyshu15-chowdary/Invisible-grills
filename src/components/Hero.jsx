import React from 'react'
import '../css/hero.css'
const Hero = ({ heading,ImgUrl }) => {
    const heroStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.356)), url(${ImgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className='hero' style={heroStyle}>
            <h1>{heading}</h1>
        </div>
    )
}

export default Hero