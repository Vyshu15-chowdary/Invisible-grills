import React from 'react'
import "../css/googleMap.css"


const GoogleMap = () => {
    
  return (
    <div className='google-map-wrapper'>
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7728.788697920529!2d79.95027199672242!3d14.404416342142394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2fc39c18115%3A0x8c14bb4eb08fde75!2sSapthagiri%20Colony%2C%20Simhapuri%20Center%2C%20Thayagaraju%20Nagar%2C%20Vedayapalem%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1754214989918!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap