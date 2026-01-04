import React from 'react'
import logoicon from "../assets/fevicon/weather-app.png"

const Logo = () => {
  return (
    <div className='logo w-fit '>
        <img className='h-15 w-15 sm:h-20 sm:w-20 lg:h-25 lg:w-25 border-2 bg-emerald-500  rounded-3xl border-emerald-500' src={logoicon} alt="" />
    </div>
  )
}

export default Logo