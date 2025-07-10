import React, { useRef } from 'react'
import '../css/quickServiceRequest.css';
import emailjs from "@emailjs/browser"


const QuickServiceRequest = () => {
  const form = useRef();

  const SERVICE_ID = "service_w130xwf";
  const TEMPLATE_ID = "template_t4a2aa4";
  const PUBLIC_KEY = "DvLHQFj7QKSqA90cJ";

  const sendMail = async (e)=>{
    e.preventDefault();
    
    try {
      const result = await emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current, PUBLIC_KEY );
      console.log("Success", result.text);
    } catch (error) {
      console.log("error", error.text)
    }

    
    
  }
  return (
    <div className='qsr'>
      <div className="txt-wrapper">
        <h3>Quick Service Request</h3>
        <h1>Free Inspection Request</h1>
      </div>
     
        <form onSubmit={sendMail} ref={form}>
          
            <input autoComplete='off' type="text" name='name' placeholder='Enter Full Name' />
            <input autoComplete='off' type="text" name='phone' placeholder='Enter Phone Number' />
       
            <button type='submit'>Send</button>
        
        </form>
     
    </div>
  )
}

export default QuickServiceRequest