import React from 'react'
import wIcon from '../assets/WhatsApp.svg.webp'
const WhatsAppButton = () => {

    const message = `Hi, I'm looking for a free consultation for invisible grills in Nellore. Could you schedule a site visit and provide a quotation?`;
    const encodeMessage = encodeURIComponent(message);
    const phoneNumber = '919052585999';

    const handleClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
        window.open(whatsappURL, '_blank');
    }

    return (
        <>
        <img src={wIcon} alt="whatsapp icon" onClick={handleClick} />
        </>
    )
}

export default WhatsAppButton