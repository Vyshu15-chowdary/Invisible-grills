import React from 'react'
import "../css/googleMap.css"


const GoogleMap = () => {
    
  return (
    <div className='google-map-wrapper'>
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7728.384695949167!2d79.95517754672845!3d14.416072691451616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf31e11b262ff%3A0x1368f4e4e09dbf!2sBV%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1751561599138!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap