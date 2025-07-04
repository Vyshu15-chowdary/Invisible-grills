import React from 'react'
import Hero from '../components/Hero'
import CounterCard from '../components/CounterCard';


const Home = () => {
  const ImgUrl = 'https://www.mgscreens.com/assets/img/invisible/inv1.jpg';
  const heroText = 'Welcome To Home Page.';


  return (
    <>
      <Hero heading={heroText} ImgUrl={ImgUrl} />
      <CounterCard bgColor={"#8f1428"}  value={500} suffix={"+"} title={"Happy Customers"} />
    </>
  )
}

export default Home