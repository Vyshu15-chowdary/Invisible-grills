import React from 'react'
import Hero from '../components/Hero';
import RawMaterial from '../components/RawMaterial.jsx';
import '../css/Gallery.css';
import GalleryCardContainer from '../components/GalleryCardContainer.jsx';



const images = [
  './CH1.jpg',
  './CH2.webp',
  './CH4.webp',
  './CH6.webp',
  './CH7.jpg',
  './CH8.jpg'

];

const MeshImages = [
  './MD1.jpg',
  './MD2.webp',
  './MD3.jpg',
  './MD4.jpg',
  './MD5.jpeg',
  './MD6.webp'
]

const grillsImages = [
  './grills1.webp',
  './grills2.webp',
  './grills3.webp',
  './grills4.jpg',
  './grills5.webp',
  './grills6.webp'
]



const Gallery = () => {

  const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/Balcony.jpg";
  const heading = "Gallery";


  return (
    <>
      <Hero ImgUrl={ImgUrl} heading={heading} />

      {/*-----cloth hanger products-----*/}
<GalleryCardContainer heading={"Cloth Drying Ceiling Hangers"}  items={images}/>

      <div className='Gallery'>

        <h2><span>CLOTH</span> DRYING CEILING <span>HANGER </span> Products</h2>
        <div className='gallery-grid'>
          <div className='Cloth Hangers'>
            {images.map((src, index) => (
              <div key={index} className='image-card'>
                <img src={src} alt={`clothhangers ${index + 1}`} />
              </div>
            ))}

          </div>
        </div>



        { /*---mesh door products------*/}
        <div className='Gallery'>
          <div className='mesh-gallery'>
            <h2>MOSQUITO <span>MESH DOOR</span>  PRODUCTS</h2>
            <div className='gallery-grid'>
              <div className='Mesh Door'>
                {MeshImages.map((src, index) => (
                  <div key={index} className='image-card'>
                    <img src={src} alt={`MeshDoors ${index + 1}`} />
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
      {/*----Invisible product-------*/}

      <div className='Grills-gallery'>
        <h2> <span>INVISIBLE GRILLS</span>  PRODUCTS</h2>
        <div className='gallery-grid'>
          <div className='Invisible grills'>
            {grillsImages.map((src, index) => (
              <div key={index} className='image-card'>
                <img src={src} alt={`Invisible grills ${index + 1}`} />
              </div>
            ))}

          </div>
        </div>

      </div>
  



  <RawMaterial />
    </>
  )
}

export default Gallery;