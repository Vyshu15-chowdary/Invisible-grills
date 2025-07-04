import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CounterCard = ({value, suffix, title}) => {
    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className='counter-card'  ref={ref}>
            <h1>
                {
                    inView?<CountUp end={value} duration={2} suffix={suffix}  /> : "0 "
            }
            </h1>
            <p>{title}</p>
        </div>
    )
}

export default CounterCard