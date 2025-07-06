import React from 'react'
import "../css/navbar.css"
const NavbarPhone = ({setIsActivePhoneNavbar}) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>VIG</h1>
            </div>

            
                <i onClick={()=>setIsActivePhoneNavbar(true)}  className="fa-solid fa-bars"></i>
           
        </div>
    )
}

export default NavbarPhone