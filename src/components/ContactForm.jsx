import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_1x4q3zj', 'template_2g5k6y7', form.current, 'user_1234567890')
    //         .then((result) => {
    //             console.log(result.text);
    //             alert("Message sent successfully!");
    //         }, (error) => {
    //             console.log(error.text);
    //             alert("Failed to send message. Please try again later.");
    //         });

    //     e.target.reset(); // Reset the form after submission
    // }
    return (
        <div>
            <h2>Contact Us</h2>
            <form ref={form} >

                <div className="form-control">
                    <input type="text" name='name'  placeholder='Enter Your Name' />
                </div>
                <div className="form-control">
                    <input type="text" name='email' placeholder='Enter Your Email ' />
                </div>
                <div className="form-control">
                    <input type="text" name='phone' placeholder='Enter Your Phone Number ' />
                </div>
                <div className="form-control">
                   <textarea name="message" id="" placeholder='Write Your Message Here..'></textarea>
                </div>

                <div className="btn-control">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm