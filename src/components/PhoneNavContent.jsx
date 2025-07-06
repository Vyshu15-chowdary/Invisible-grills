import React from 'react'

const PhoneNavContent = () => {
  return (
    <div className='phone-nav-content'>
        <i className="fa-solid fa-xmark"></i>
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

export default PhoneNavContent