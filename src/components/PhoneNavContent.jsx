import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import "../css/phoneNavContent.css"

const PhoneNavContent = ({isOpen, onClose}) => {
  const PhoneNavRef = useRef();
const date = new Date();

  useEffect(()=>{
    const handleOutsideClick = (e)=>{
      if(PhoneNavRef.current && !PhoneNavRef.current.contains(e.target)){
      //  console.log(PhoneNavRef.current, !PhoneNavRef.current.contains(e.target))
        onClose();
      }
    }

    if(isOpen){
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }

    return ()=>{
      document.removeEventListener("mousedown", handleOutsideClick);
    }

  }, [isOpen, onClose]);

  if(!isOpen)return null;

  return (
    <div className='nav-overlay'>
      <div className="phone-nav" ref={PhoneNavRef}>

     
        <ul>
          <li ><NavLink to={"/"} onClick={()=>onClose()}>Home</NavLink></li>
          <li><NavLink to={"/about"} onClick={()=>onClose()}>About Us</NavLink></li>
          <li><NavLink to={"/services"} onClick={()=>onClose()}>Services</NavLink></li>
          <li><NavLink to={"/gallery"} onClick={()=>onClose()}>Gallery</NavLink></li>
          <li><NavLink to={"/contact"} onClick={()=>onClose()}>Contact Us</NavLink></li>
        </ul>


<div className="phone-nav-bottom">
<p>Vyshnavi Invisible Grills &copy; {date.getFullYear()} </p>
</div>
        
      </div>
    </div>
  )
}

export default PhoneNavContent