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


      <div id='flexcontainer'>
        <div id='cards'>
          <div className='card'>
            <img src="./project.jpg" alt="projects completed"></img>
            <h2>500+</h2>
            <p>PROJECTS DONE</p>
          </div>
        </div>

        <div className='card'>
          <img src="./clients.jpg" alt="customers"></img>
          <h2>500+</h2>
          <p>CLIENTS SATISFIED</p>

        </div>
        <div className='card'>
          <img src="./quality.jpg" alt="customers"></img>
          <h2> quality Material </h2>
          <p>NUMBER 1 QUALITY</p>

        </div>

      </div>

    </>


  )
}

export default About