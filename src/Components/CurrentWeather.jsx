import React from 'react'

const CurrentWeather = () => {
    return (
        <div className='flex justify-between border-4 border-emerald-500 p-8 rounded-4xl '>
            <div className="Current-weather-data flex flex-col w-1/2 items-center">
                <h2 className='text-5xl'>Mumbai</h2>
                <h5 className='text-2xl p-5'>Sunny</h5>
                <h1 className='text-9xl mt-10'>24°C</h1>
            </div>
            <div className="condition-img flex items-center ">
                <img className='h-60 w-60' src="src/assets/sun.png" alt="" />
            </div> 
        </div>
    )
}

export default CurrentWeather