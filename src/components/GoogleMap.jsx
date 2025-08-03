import React from 'react'
import "../css/googleMap.css"


const GoogleMap = () => {
    
  return (
    <div className='google-map-wrapper'>
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.334851252054!2d79.95698317486647!3d14.407850581767105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3bdda5c7af1%3A0x64443930295bee8f!2sOld%20vedayapalem%20Nellore!5e0!3m2!1sen!2sin!4v1754223145940!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap