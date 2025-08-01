import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
         <img src="./VIGlogo.jpg"  alt ="vig logo" className='logo-img'></img>
         </div>
        
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About Us</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar