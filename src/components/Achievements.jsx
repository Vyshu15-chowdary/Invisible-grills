import React from 'react'
import CounterCard from './CounterCard'

import "../css/achievements.css"

const Achievements = () => {
  return (
    <div className='achievements'>
      <CounterCard bgColor={"#8f1428"}  value={7} suffix={"+"} title={"Years In Bussiness"} />
      <CounterCard bgColor={"#222"}  value={500} suffix={"+"} title={"Happy Customers"} />
      <CounterCard bgColor={"#8f1428"}  value={500} suffix={"+"} title={"Projects Completed"} />
      <CounterCard bgColor={"#222"}  value={20} suffix={"+"} title={"Trained Staff"} />
    </div>
  )
}

export default Achievements