import React from 'react'
import wIcon from '../assets/WhatsApp.svg.webp'
import '../css/whatsappButton.css'
import { FOUNDER_WHATSAPP } from '../../constant';

const WhatsAppButton = () => {

    const message = `Hi, 

    I'm looking for a free consultation for invisible grills in Nellore. 
    
    Could you schedule a site visit and provide a quotation?`;

    const encodeMessage = encodeURIComponent(message);
    const phoneNumber = "916303744627";

    const handleClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
        window.open(whatsappURL, '_blank');
    }

    return (
        <>
        <img className='wIcon' src={wIcon} alt="whatsapp icon" onClick={handleClick} />
        </>
    )
}

export default WhatsAppButton