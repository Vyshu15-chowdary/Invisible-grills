import React from 'react'
import '../css/About.css'
const About = () => {
  return (
    <>
   <section className='About'>
    <div className='content'>
      <div className='title'>
        <h1>welcome </h1>
        <h1>To</h1>
        <h1> <span>VIG</span> invisible <span> Grills</span></h1>
      </div>
      <div className='sub-title'>
        <p>At Vyshnavi Invisible Grills, we redefine safety with elegance.
           Specializing in high-quality invisible grill installations, 
          we offer modern, secure, and stylish solutions for homes, 
          apartments, balconies, windows, and commercial spaces.</p>
         <p>  Our invisible grills are made from premium-grade stainless steel coated with nylon for added durability,</p>
          <p>  strength, and rust-resistance—ensuring safety without compromising your view.
            With a commitment to excellence and customer satisfaction,
            we tailor every project to your needs, providing sleek protection for your loved ones—especially
           children and pets—while enhancing the aesthetics of your living space.</p>
       
      </div>
    </div>
   </section>

  

   <section className='about_container'>
    <div className='about_container'>
      <div className='stats'>

        <div className='stat'>
          <div className='icon'>
           <img src ="./task-complete.png" alt = "task complete" className='img'></img>
          </div>
          <div className='text'>
            <h1>500+</h1>
            <p>Projects Done</p>
          </div>
        </div>

         <div className='stat'>
          <div className='icon'>
            <img src= "./costumer.png" alt = "client"/>
          </div>
          <div className='text'>
            <h1>500+</h1>
            <p>Happy Clients</p>
          </div>
        </div>

         <div className='stat'>
          <div className='icon'>
            <img src="validation.png"alt="certified"/>
          </div>
          <div className='text'>
            <h1>1</h1>
            <p>certified</p>
          </div>
        </div>

         <div className='stat'>
          <div className='icon'>
            <i></i>
          </div>
          <div className='text'>
            <h1>Material Quality</h1>
            <p>material</p>
          </div>
        </div>






      </div>

    </div>

   </section> 
    

  
   </>

   
  )
}

export default About