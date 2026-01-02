import React from 'react'
import AirCondition from './AirCondition'
import sun from "../assets/sun.png"

const Weather = () => {
    return (
        <div className='weather flex flex-col gap-6 lg:gap-12 mt-4 lg:mt-8'>
            <div className='w-full border-4 border-emerald-500 rounded-3xl p-5 sm:p-8 flex justify-between gap-2'>
                <div className="leftdata w-fit flex flex-col items-center ">
                    <h2 className='text-4xl lg:text-6xl'>Mumbai</h2>
                    <h5 className='text-xl lg:text-4xl'>Sunny</h5>
                    <div className="temp text-5xl lg:text-8xl mt-6 lg:mt-15">
                        24°C
                    </div>
                </div>
                <div className="rightdata  w-fit flex items-center">
                    <img className='h-25 sm:h-30 w-30 lg:h-50 lg:w-50' src={sun} alt="" />
                </div>
            </div>
            <div className='aircondition border-2 border-emerald-500 rounded-3xl p-5 lg:p-8'>
                <h2 className='sm:text-2xl lg:text-3xl'>Air Conditions</h2>
                <div className='flex flex-wrap justify-between gap-2 mt-4 sm:mt-6'>
                    <AirCondition />
                    <AirCondition />
                    <AirCondition />
                    <AirCondition />
                </div>
            </div>
        </div>
    )
}

export default Weather