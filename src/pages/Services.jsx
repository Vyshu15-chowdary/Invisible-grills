import React from 'react'
import Hero from '../components/Hero';
import '../css/Services.css'





const Services = [
  {
    title: "Balcony Invisible Grill",
    image: "./balcony.jpg",
    description: "Strong and sleek protection for open balconies with clear views"
  },

  {
    title: "window invisible grills",
    image: "./window.avif",
    description: "Secure your windows with rust-free,child-safe invisible grills"
  },

  {
    title: "Staircase Invisible Grill",
    image: "./staircase.jpg",
    description: "Ensure safety on stair cases while maintaining a modern look"
  },
  {
    title: "Bird Net",
    image: "./birdnet.jpg",
    description: "Protect your home and workspace from bird intrusions with our high-quality Bird Net Installation Service. "
  },
  {
    title: "Mosqito Net",
    image: "./mosquito.jpg",
    description: " Keep your home protected from mosquitoes and insects without compromising on fresh air and ventilation. Our Mosquito Net for Doors provides an effective, hygienic, and eco-friendly solution to prevent unwanted bugs from entering your living space."
  },
  {
    title: "Artificial Grass",
    image: "./greenmat.jpg",
    description: "Transform your space with lush, maintenance-free artificial grass that stays green all year round. Our artificial turf solutions are ideal for balconies, gardens, terraces, schools, playgrounds, and commercial spaces"
  },
  // {
  //   title: "Cloth Roof Hanger",
  //   image: './clothhanger.jpg',
  //   description: "Maximize your drying space with our sleek and durable roof-mounted cloth hanger systems. Designed for modern homes, our hangers are ideal for balconies, utility areas, and indoor spaces—offering a convenient and space-saving solution for drying clothes."
  // }
];


// Hero Section Items
const ImgUrl = "https://cdn-ikpjmaj.nitrocdn.com/tpiOjaVkKiYlOPaZEGMJBhdGjCOUFngB/assets/images/optimized/rev-79ca70e/elelaurels.com/wp-content/uploads/2016/12/InvisGrilleBalcony2.jpg";
const heading = `Your Safety - Our Priority`;


const Service = () => {
  return (
    <>
      <Hero ImgUrl={ImgUrl} heading={heading} />

      <section className='service-section'>
        <h2 className='service-title'>Our Services</h2>

        <div className='service-grid'>
          {Services.map((Service, index) => (

            <div className='service-card' key={index}>
              <img src={Service.image} alt={Service.title} className='service-image' />
              <div className='service-content'>
                <h3>{Service.title}</h3>
                <hr />
                <p>{Service.description}</p>
              </div>
            </div>

          ))}
        </div>

      </section>

  

      <section className='works'>
        <div className='work'>
          <div className="work-content">
            <h2>✅ Customized Safety for Every Space</h2>
            <hr />
            <p>At Vyshnavi Invisible Grills, we understand that every home and space is unique.
              That’s why we offer fully customized safety solutions tailored to your specific needs.
              Whether it's a balcony in a high-rise apartment, a staircase in a duplex, or ventilation ducts in a commercial space,
              our invisible grills are designed to fit seamlessly without compromising your architectural style. With flexible installation options, rust-resistant materials, and child-safe spacing,
              we ensure maximum protection with minimal visual impact. You can also choose from various finishes and orientations to match your interior or exterior design, giving you both safety and style in one solution.

            </p>
          </div>

          <div className='work-img'>
            <img src="./img5.jpg" alt="img"  />
          </div>
        </div>

        <div className='work left'>
          <div className="work-content">
            <h2>🌿 Artificial Grass Installation</h2>
            <hr />

            <p>Transform your outdoor and indoor spaces with our premium-quality artificial grass solutions. Designed to look and feel like natural grass, our synthetic turf is ideal for gardens, balconies, terraces, playgrounds, and commercial spaces. It requires minimal maintenance, stays green year-round, and is resistant to weather, wear, and pests. Our artificial grass is pet-friendly, child-safe, and environmentally sustainable, making it a perfect choice for hassle-free landscaping.
               Enjoy a lush, green look without the need for watering, mowing, or fertilizing
            </p>
          </div>

          <div className='work-img'>
            <img src="./img7.jpg" alt="img"  />
          </div>
        </div>

        <div className='work'>
          <div className="work-content">
            <h2>🧰 Invisible Grill Fitting Trainer</h2>
            <hr />

            <p>Our Invisible Grill Fitting Trainer is a highly skilled professional with hands-on expertise in the safe and precise installation of invisible grills.
               With in-depth knowledge of advanced fitting techniques, measurements, safety protocols, and customized installations, the trainer ensures that every trainee gains the technical confidence to handle real-world projects. Whether you’re new to the field or looking to upgrade your skills,
               our trainer provides step-by-step guidance, live demos, and practical tips to make you industry-ready.
            </p>
          </div>

          <div className='work-img'>
            {/* <img  src="./trainedworker.jpg" alt="img"  /> */}
            <img  src="https://www.shutterstock.com/image-vector/carpenter-his-son-do-craft-600nw-1786891685.jpg" alt="img"  />
          </div>
        </div>

        <div className='work left'>
          <div className="work-content">
            <h2>🌦️ Weather & Rust Resistant:</h2>
            <hr />

            <p>Our invisible grills are built using high-tensile, marine-grade stainless steel coated with a protective layer that resists rust and corrosion.
               Whether exposed to heavy rain, intense sunlight, or coastal humidity,
                these grills are engineered to withstand extreme weather conditions without losing strength or appearance.
                 This ensures long-lasting durability, safety, and a clean, modern look—no matter the environment.



            </p>
          </div>

          <div className='work-img'>
            <img src="./img4.webp" alt="img"  />
          </div>
        </div>

        <div className='work'>
          <div className="work-content">
            <h2>Uninterrupted Views, Maximum Safety</h2>
            <hr />

            <p>
              Enjoy the perfect balance of safety and aesthetics with our invisible grills. Designed using ultra-thin, high-strength stainless steel cables,
               they provide maximum protection without blocking your view. Unlike traditional iron grills,
               our invisible grills blend seamlessly with your surroundings, offering a clean and modern look while keeping your loved ones safe. Whether it's a high-rise balcony or a large window, you get clear, unobstructed views with complete peace of mind.
            </p>
          </div>

          <div className='work-img'>
            <img src="./img6.jpeg" alt="img"  />
          </div>
        </div>

      </section>


    </>

  )

};

export default Service;