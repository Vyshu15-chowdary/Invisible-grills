import React, { useRef } from 'react'
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_1x4q3zj', 'template_2g5k6y7', form.current, 'user_1234567890')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });

            e.target.reset(); // Reset the form after submission
    }
  return (
    <div>
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>

<div className="form-control">
    <input type="text" />
</div>
<div className="form-control">
    <input type="text" />
</div>
<div className="form-control">
    <input type="text" />
</div>

<div className="btn-control">
    <button>Submit</button>
</div>
        </form>
    </div>
  )
}

export default ContactForm