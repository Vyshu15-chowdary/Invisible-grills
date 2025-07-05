import React from 'react'
import Hero from '../components/Hero';
import '../css/Services.css'


const Services =[
  {
    title:"Balcony Invisible Grill",
    image:"./balcony.jpg",
    description:"Strong and sleek protection for open balconies with clear views"
  },

  {
    title:"window invisible grills",
    image:"./window.avif",
    description:"Secure your windows with rust-free,child-safe invisible grills"
  },

  {
    title:"Staircase Invisible Grill",
    image:"./staircase.jpg",
    description:"Ensure safety on stair cases while maintaining a modern look"
  },
  {
    title:"Bird Net",
    image:"./birdnet.jpg",
    description:"Protect your home and workspace from bird intrusions with our high-quality Bird Net Installation Service. "
  },
  {
    title:"Mosqito Net",
    image:"./mosquito.jpg",
    description:" Keep your home protected from mosquitoes and insects without compromising on fresh air and ventilation. Our Mosquito Net for Doors provides an effective, hygienic, and eco-friendly solution to prevent unwanted bugs from entering your living space."
  }
];

 const Service = () =>{
return(

  <section className='service-section'>
    <h2 className='service-title'>OUR SERVICES</h2>
    <div className='service-grid'>
      {Services.map((Service,index) =>(
        <div className='service-card' key={index}>
          <img src ={Service.image} alt ={Service.title} className='service-image'/>
          <div className='service-content'>
            <h3>{Service.title}</h3>
            <p>{Service.description}</p>
          </div>
        </div>
      ))}

    </div>

  </section>
)
 
 };

export default Service;