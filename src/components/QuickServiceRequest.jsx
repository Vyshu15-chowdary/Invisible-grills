import React from 'react'
import '../css/quickServiceRequest.css';



const QuickServiceRequest = () => {
  return (
    <div className='qsr'>
      <div className="txt-wrapper">
        <h3>Quick Service Request</h3>
        <h2>Free Inspection Request</h2>
      </div>
     
        <form action="">
          
            <input type="text" name='name' placeholder='Enter Full Name' />
            <input type="text" name='phone' placeholder='Enter Phone Number' />
       
            <button>Send</button>
        
        </form>
     
    </div>
  )
}

export default QuickServiceRequest