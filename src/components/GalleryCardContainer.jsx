import React from 'react'
import GalleryCard from './GalleryCard'

const GalleryCardContainer = ({items}) => {
  return (
    <div className='gallery-card-container'>
{
    items?.map((i,index)=>(
        <GalleryCard key={index} url={i}/>
    ))
}
    </div>
  )
}

export default GalleryCardContainer