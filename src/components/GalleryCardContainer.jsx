import React from 'react'
import GalleryCard from './GalleryCard'
import "../css/galleryCardContainer.css"

const GalleryCardContainer = ({ items, heading }) => {
  return (

    <>
      <div className="gallery-card-container-header">
        <h2>{heading}</h2>
      </div>
      <div className='gallery-card-container'>
        {
          items?.map((i, index) => (
            <GalleryCard key={index} url={i} />
          ))
        }
      </div>
    </>
  )
}

export default GalleryCardContainer