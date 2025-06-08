import React from 'react'
import pIcon from '../assets/Phone.webp';
import "../css/phoneButton.css"
const CallMeButton = () => {
    const phoneNumber = '+919052585999';
  return (
    <>
    <a href={`tel:${phoneNumber}`}>
        <img className='pIcon' src={pIcon} alt="call me icon" />
    </a>
    </>
  )
}

export default CallMeButton