import React, { useState } from 'react'
import "../css/contactForm.css"
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className='cf-container'>
      <form action="">
        <h1>Write Message Here</h1>
     
        <br />

        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}  placeholder='Enter Your Name' />
        <input type="text" placeholder='Enter Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <textarea name="" id="" placeholder='Write Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} rows={5}></textarea>
        <button>Send Message</button>
      </form>



    </div>
  )
}

export default ContactForm