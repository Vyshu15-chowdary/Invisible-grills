import React from 'react'
import "../css/contactForm.css"
const ContactForm = () => {
  return (
    <div className='cf-container'>
      <form action="">
        <h1>Write Message Here</h1>
     
        <br />

        <input type="text" placeholder='Enter Your Name' />
        <input type="text" placeholder='Enter Phone Number' />
        <textarea name="" id="" placeholder='Write Your Message' rows={5}></textarea>
        <button>Send Message</button>
      </form>



    </div>
  )
}

export default ContactForm