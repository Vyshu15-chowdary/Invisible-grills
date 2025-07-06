import React from 'react'

const WhyChooseUsCard = ({icon, title, description}) => {
  return (
    <div className='why-choose-us-card'>
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default WhyChooseUsCard