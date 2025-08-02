import React from 'react'
import '../css/hero.css'
const Hero = ({ heading,ImgUrl }) => {
    const heroStyle = {
        backgroundImage: `linear-gradient(to right, rgba(22, 4, 4, 0.51), rgba(0, 0, 0, 0.25)), url(${ImgUrl})`,
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