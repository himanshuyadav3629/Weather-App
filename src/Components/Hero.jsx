import React from 'react'
import CurrentWeather from './CurrentWeather'
import Condition from './Condition'

const Hero = () => {
  return (
    <div className=' text-white p-4 flex flex-col gap-15  '>
        <CurrentWeather/>
        <Condition/> 
    </div>
  )
}

export default Hero