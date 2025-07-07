import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard'
import "../css/whyChooseUs.css"

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: "fa-solid fa-award",
            title: "Quality Material",
            description: "Our invisible grills are made from high-tensile stainless steel, ensuring durability, rust resistance, and long-lasting safety."
        },
        {
            icon: "fa-solid fa-circle-check",
            title: "Accredited",
            description: "We follow strict industry standards and certifications, guaranteeing premium quality and safety for all installations."
        },
        {
            icon: "fa-solid fa-users",
            title: "Trained Workers",
            description: "Our skilled professionals ensure precise installation, delivering a secure, seamless, and aesthetically pleasing setup."
        },
        {
            icon: "fa-solid fa-business-time",
            title: "Time Availability",
            description: "We offer flexible scheduling options, making it easy for customers to book installations at their convenience."
        },
        {
            icon: "fa-solid fa-phone-volume",
            title: "Quick Response",
            description: "Our dedicated support team provides fast assistance, resolving inquiries and service requests without delays."
        },
        {
            icon: "fa-solid fa-certificate",
            title: "10 Year Warrenty",
            description: "We back our products with a decade-long warranty, ensuring reliability, peace of mind, and long-term satisfaction."
        }
    ]
    return (
        <div className='why-choose-us'>
            <div className="choose-us-header">
                <h3>Why Choose Us</h3>
                <h2>Reasons For People Choosing Us</h2>

                <hr />
            </div>


            <div className="choose-card-wrapper">
                {
                    benefits.map((b, i) => <WhyChooseUsCard data={b} key={i} />)
                }
            </div>

        </div>
    )
}

export default WhyChooseUs