import React from 'react'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import DataValue from '../Components/DataValue'
import Pricing from '../Pages/Pricing'
import PlanCom from '../Components/PlanCom'
import Team from '../Components/Team'
import Post from '../Components/Post'
import Footer from '../Components/Footer'
import Scroll from '../Components/Scroll'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <DataValue/>
      <Pricing/>
      <PlanCom/>
      <Team/>
      <Post/>
      <Footer/>
      <Scroll/>
    </div>
  )
}

export default Home
