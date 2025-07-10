import React, { useState } from 'react'
import '../css/quickServiceRequest.css';



const QuickServiceRequest = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit =  (e)=>{
    e.preventDefault();
    
    console.log(e);
  
  }


  return (
    <div className='qsr'>
      <div className="txt-wrapper">
        <h3>Quick Service Request</h3>
        <h1>Free Inspection Request</h1>
      </div>
     
        <form onSubmit={handleSubmit} >
          
            <input autoComplete='off' type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' placeholder='Enter Full Name' />
            <input autoComplete='off' type="text" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone Number' />
       
            <button type='submit'>Send</button>
        
        </form>
     
    </div>
  )
}

export default QuickServiceRequest