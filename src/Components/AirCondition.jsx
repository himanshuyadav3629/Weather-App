import { Thermometer } from 'lucide-react'
import React from 'react'



const AirCondition = (props) => {
  
  
  return (
    
        <div className="stat flex flex-col items-center w-fit mb-4 sm:mb-2">
            <h5 className='flex sm:text-xl lg:text-2xl'><Thermometer /> {props.title}</h5>
            <h3 className='sm:text-lg lg:text-xl'>{props.val}</h3>
        </div>
        
    
  )
}

export default AirCondition