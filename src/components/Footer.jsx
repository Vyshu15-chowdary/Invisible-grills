import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/footer.css"

const Footer = () => {
    const data = new Date();

    return (
        <div className='footer'>
            <div className="footer-sections">
                <div className="footer-section">
                    <h2>About Us</h2>

                    <p>Vyshnavi Invisible Grills offer high-strength, rust-free protection with a clear view. Made from durable stainless steel, they ensure safety without compromising style.</p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>

                    <ul>
                        <li><NavLink>Privacy Policy</NavLink></li>
                        <li><NavLink>Terms Of Service</NavLink></li>
                        <li><NavLink>Credits</NavLink></li>
                        <li><NavLink>FAQ</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Our Services</h2>

                    <ul>
                        <li><NavLink>Invisible Grills</NavLink></li>
                        <li><NavLink>Clothes Hangers</NavLink></li>
                        <li><NavLink>Artificial Garden</NavLink></li>
                        <li><NavLink> Mosquito Mesh Doors</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Free Estimate</h2>

                    <p>Call Us: +91 6303 744627</p>
                    <p>B.v nagar sapthagiri colony</p>
                    <p>Old Vedhayapalem Mini Bypass.</p>
                    <p>Near Ayyapa gudi fly over</p>
                    <p>Nellore - 524004</p>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>Copyright &copy; {data.getFullYear()} Vyshnavi Invisible Grills </p>
                <p>Powered By Vyshnavi Invisible Grills</p>
            </div>
        </div>
    )
}

export default Footer