import React from 'react'
import "../css/googleMap.css"


const GoogleMap = () => {
    
  return (
    <div className='google-map-wrapper'>
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60921.46136955282!2d78.3598523338936!3d17.38338678938934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb968ea6aea98f%3A0x6b76ecdfd65a335a!2sGolconda%20Fort%2C%20Khair%20Complex%2C%20Ibrahim%20Bagh%2C%20Hyderabad%2C%20Telangana%20500008!3m2!1d17.383309099999998!2d78.4010522!5e0!3m2!1sen!2sin!4v1751477379718!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMap