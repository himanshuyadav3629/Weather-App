import React from 'react'
import sun from "../assets/sun.png"

const WeekDay = () => {
  return (
    <div className='flex items-center justify-between  sm:text-2xl mb-2'>
        <h4 className="text-xl sm:text-2xl">Today</h4>
        <img className='h-15 w-15 sm:h-20 sm:w-20 className="text-2xl"' src={sun} alt="" />
        <h4 className="text-xl sm:text-2xl">Sunny</h4>
    </div>
  )
}

export default WeekDay