import React from 'react'
import '../css/quickServiceRequest.css';



const QuickServiceRequest = () => {
  return (
    <div className='qsr'>
      <div className="txt-wrapper">
        <h3>Quick Service Request</h3>
        <h1>Free Inspection Request</h1>
      </div>
     
        <form action="">
          
            <input autoComplete='off' type="text" name='name' placeholder='Enter Full Name' />
            <input autoComplete='off' type="text" name='phone' placeholder='Enter Phone Number' />
       
            <button type='submit'>Send</button>
        
        </form>
     
    </div>
  )
}

export default QuickServiceRequest