import React from 'react'
import GalleryCard from './GalleryCard'
import "../css/galleryCardContainer.css"

const GalleryCardContainer = ({ items, heading, bgColor }) => {
  return (

    <div className='gallery-card-container' style={{ backgroundColor: bgColor ? bgColor : "#f1f1f1" }}>
      <div className="gallery-container-header">
        <h2>{heading}</h2>
        <hr />
      </div>
      <div className='gallery-cards'>
        {
          items?.map((i, index) => (
            <GalleryCard key={index} url={i} />
          ))
        }
      </div>
    </div>
  )
}

export default GalleryCardContainer