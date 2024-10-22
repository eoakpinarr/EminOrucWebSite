import React from 'react'
import Slider from '../components/Slider/Slider'
import PersonalInfo from '../components/PersonalInfo/PersonalInfo'
import OfficeInfo from '../components/OfficeInfo/OfficeInfo'
import ServicesHome from '../components/ServicesHome/ServicesHome'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider />
      <hr />
      <OfficeInfo />
      <hr />
      <PersonalInfo />
      <hr />
      <ServicesHome />
      <hr />
    </div>
  )
}

export default Home