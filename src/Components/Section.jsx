import React from 'react'
import Navbar from './Navbar'
import Weather from './Weather'
import WeekCondition from './WeekCondition'

const Section = () => {
    return (
        <div className='min-h-screen lg:min-h-full xl:min-h-screen w-full bg-black text-white p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-8 lg:flex-row '>
            <div className='lg:w-2/3 ' >
                <Navbar />
                <Weather />
            </div>
            <div className='lg:w-1/3'>
                <WeekCondition />
            </div>
        </div>
    )
}

export default Section