import React from 'react'

const GalleryCard = ({url}) => {
  return (
    <div className='gallery-card'>
        <img src={url} alt="" />
    </div>
  )
}

export default GalleryCard