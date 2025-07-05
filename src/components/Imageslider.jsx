import React,{useState} from 'react'
import '../css/ImageSlider.jsx';
const images = [

    './img4.webp',
    './img5.jpg',
    './img6.jpg',
    './img7.jpg',
    './img8.jpg'
];

const ImageSlider = () =>{

    const[index,setIndex] = useState(0);

    const nextSlide = ()=>{
        setIndex((prevIndex)=>(prevIndex + 1) % images.length);
    };

    const prevSlide = ()=>{
        setIndex((prevIndex)=>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

   return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} className="slide-image" />
        ))}
      </div>
      <button className="nav-button prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
