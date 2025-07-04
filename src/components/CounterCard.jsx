import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import "../css/counterCard.css"


const CounterCard = ({value, suffix, title, bgColor}) => {
    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className='counter-card' style={{backgroundColor:bgColor}}  ref={ref}>
            <h1>
                {
                    inView?<CountUp end={value} duration={2} suffix={suffix}  /> : "0"
            }
            </h1>
            <p>{title}</p>
        </div>
    )
}

export default CounterCard