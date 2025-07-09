import React from 'react'
import Hero from '../components/Hero';
import RawMaterial from '../components/RawMaterial.jsx';
import '../css/Gallery.css';



  const heading = "Gallery";
  const images = [
        './CH1.jpg',
        './CH2.webp',
        
        './CH4.webp',
        
        './CH6.webp',
        './CH7.jpg',
        './CH8.jpg'
        
  ];



const Gallery = () => {

  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/Balcony.jpg";



  /*--- CLOTH HANGER PRODUCTS----*/

  /*--------MESH DOOR PRODUCTS----------*/
  
  /*------INVISIBLE GRILLS PRODUCT------*/

  /*-------ARTIFICIAL GRASS PRODUCT--------*/

  /*--------pegion net product----------*/


  return (
    <>
    <Hero ImgUrl={ImgUrl} heading={heading}/>

    <div className ='Gallery'>
      
        <h1>Cloth Drying Ceiling Hanger Products</h1>
        <div className='gallery-grid'>
        <div className='Cloth Hangers'>
          {images.map((src,index)=>(
            <div key ={index} className='image-card'>
            <img src = {src} alt={`clothhangers ${index+1}`} />
            </div>
          ))}

        </div>
      </div>
      <div>

      </div>
    </div>
    <RawMaterial />
    </>
  )
}

export default Gallery;