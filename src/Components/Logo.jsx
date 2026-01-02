import React from 'react'
import cloudy from "../assets/cloudy.png"

const Logo = () => {
  return (
    <div className='logo w-fit'>
        <img className='h-15 w-15 sm:h-20 sm:w-20 lg:h-25 lg:w-25 border-2 rounded-3xl border-emerald-500' src={cloudy} alt="" />
    </div>
  )
}

export default Logo