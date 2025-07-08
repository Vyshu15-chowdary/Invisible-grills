import React, { useRef } from 'react'
import img from "../assets/con2.png"

// import emailjs from '@emailjs/browser';

import "../css/contactForm.css"


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
        <>
            <div className="contact-form">


                <div className="contact-form-content">
                    <div className="contact-form-img">
                        <img src={img} alt="contact form" />
                    </div>

                    <form ref={form} >
                        <div className="contact-form-header">
                            <h2>Get In Touch</h2>
                            <hr />

                        </div>

                        <div className="form-features">
                            <div className="form-control">
                                <input type="text" autoComplete='off' name='name' placeholder='Enter Your Name' />
                            </div>
                            <div className="form-control">
                                <input type="text" autoComplete='off' name='email' placeholder='Enter Your Email ' />
                            </div>
                            <div className="form-control">
                                <input type="text" autoComplete='off' name='phone' placeholder='Enter Your Phone Number ' />
                            </div>
                            <div className="form-control">
                                <textarea name="message" rows={4} id="" placeholder='Write Your Message Here..'></textarea>
                            </div>

                            <div className="btn-control">
                                <button>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactForm