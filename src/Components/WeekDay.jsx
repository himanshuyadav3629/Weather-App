import React from 'react'
import sun from "../assets/sun.png"

const WeekDay = (props) => {
  
  
  return (
    <div className='flex items-center justify-between  sm:text-2xl mb-2'>
        <h4 className="text-xl sm:text-2xl">{props.Day}</h4>
        <img className='h-15 w-15 sm:h-20 sm:w-20 className="text-2xl"' src={`/Condition/${props.node?.weather[0].main}.png`} alt="" />
        <h4 className="text-xl sm:text-2xl">{props.node?.weather[0].main}</h4>
    </div>
  )
}

export default WeekDay