import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import RawMaterial from '../components/RawMaterial.jsx';
import img from '../../public/glry.jpg';
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

  const ImgUrl = "https://www.aluminiumwrought.com/wp-content/uploads/2023/04/Invisible-Grill-Singapore-1.jpeg";
  const heading = "Gallery";

useEffect(()=>{
    document.title = "Welcome To Gallery"

}, [])
  return (
    <>
      <Hero ImgUrl={ImgUrl} heading={heading} />
      <GalleryCardContainer heading={"Cloth Drying Ceiling Hangers"} items={images} />
      <GalleryCardContainer bgColor={"#fff"} items={MeshImages} heading={"Mosquito Mesh Door Products"} />
      <GalleryCardContainer bgColor={"#f1f1f1"} heading={"Invisible Grills Products"} items={grillsImages} />
      <RawMaterial />
    </>
  )
}

export default Gallery;