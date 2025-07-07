import React from 'react'
import "../css/whyChooseUsCard.css"


const WhyChooseUsCard = ({data}) => {
  return (
    <div className='why-choose-us-card'>
        <i className={data.icon}></i>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
    </div>
  )
}

export default WhyChooseUsCard