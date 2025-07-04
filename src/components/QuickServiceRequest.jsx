import React from 'react'
import '../css/quickServiceRequest.css';



const QuickServiceRequest = () => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Quick Service Form Submitted!")
  }
  return (
    <div className='qsr'>
      <div className="txt-wrapper">
        <h3>Quick Service Request</h3>
        <h1>Free Inspection Request</h1>
      </div>
     
        <form onSubmit={handleSubmit}>
          
            <input autoComplete='off' type="text" name='name' placeholder='Enter Full Name' />
            <input autoComplete='off' type="text" name='phone' placeholder='Enter Phone Number' />
       
            <button type='submit'>Send</button>
        
        </form>
     
    </div>
  )
}

export default QuickServiceRequest