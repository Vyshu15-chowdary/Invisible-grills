import React from 'react'
import pIcon from '../assets/Phone.webp';
import useWindowWidth from '../hooks/useWindowWidth'

import "../css/phoneButton.css"
const CallMeButton = () => {
    const phoneNumber = '+919052585999';

    const width = useWindowWidth();
    const isPhone = width < 768;

  return (
    <>
    {
      isPhone? <a href={`tel:${phoneNumber}`}>
        <img className='pIcon' src={pIcon} alt="call me icon" />
    </a> : null
    }
   
    </>
  )
}

export default CallMeButton