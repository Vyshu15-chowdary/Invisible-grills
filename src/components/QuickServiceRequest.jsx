import React from 'react'

const QuickServiceRequest = () => {
  return (
    <div className='qsr'>
      <div className="wrapper">
        <h3>Quick Service Request</h3>
        <h2>Free Inspection Request</h2>
      </div>
      <div className="wrapper">
        <form action="">
          <div className="input-box">
            <input type="text" name='name' placeholder='Enter Full Name' />
            <p></p>
          </div>
          <div className="input-box">
            <input type="text" name='phone' placeholder='Enter Phone Number' />
            <p></p>
          </div>

          <div className="btn-box">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuickServiceRequest