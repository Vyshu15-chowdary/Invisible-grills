import React from 'react'
import "../css/navbar.css"
const NavbarPhone = ({ setIsActivePhoneNavbar }) => {
    return (
        <div className='navbar phone-navbar'>
            <div className="logo">
                <img src="./VIGlogo.jpg" alt="vig logo" className='logo-img'></img>

            </div>


            <i onClick={() => setIsActivePhoneNavbar(true)} className="fa-solid fa-bars"></i>

        </div>
    )
}

export default NavbarPhone