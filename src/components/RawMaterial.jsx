import React from 'react'
import '../css/RawMaterial.css';


    const RawMaterial = () =>{

        const gallery= [
        './raw1.webp',
        './raw2.jpeg',
        './raw3.webp',
        './raw4.webp',
        './raw5.webp',
        './raw6.webp',
        './raw7.jpg',
        './raw8.jpg',
        './raw9.jpg',
        './img10.jpg',
        ];

        return(
            <section className='gallery'>
                <h1>QUALITY MATERIAL</h1>
                <div className='images'>
                    <div>
              
                {gallery.slice(0,3).map((element,index)=>(
                    <img key ={index} src ={element} alt ="img"/> 
                ))}
                </div>
                <div>
                    {gallery.slice(3,6).map((element,index)=>(
                        <img key = {index} src ={element} alt = "img"/>
                    ))}
                </div>
                <div>
                     {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt ="img"  />
          ))}
                </div>
                </div>
            </section>
        );
    };


export default RawMaterial;