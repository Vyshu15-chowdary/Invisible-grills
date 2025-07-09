import React from 'react'
import "../css/galleryCard.css"


const GalleryCard = ({ url }) => {
    return (
        <div className='gallery-card'>
            <img src={url} alt={url} />
        </div>
    )
}

export default GalleryCard