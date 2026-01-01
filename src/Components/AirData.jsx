import React from 'react'
import { Thermometer } from 'lucide-react';

const AirData = () => {
    return (
        <div className="data  w-fit mt-2 p-4 flex flex-col items-center">
            <div className="feeltemp flex items-center ">
                <Thermometer /> <h5 className='text-xl'>Real Feel</h5>
            </div>
            <h3 className='text-xl mt-2'>21°C</h3> 
        </div>
    )
}

export default AirData