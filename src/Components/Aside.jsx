import React from 'react'
import WeekData from './WeekData'

const Aside = () => {
  return (
    <div className='text-white p-4'>
        <h5 className='text-3xl'>7 DAYS FORECAST</h5>
        <br /><br />
        <div className="weekdata  h-full ">
            <WeekData/>
            <WeekData/>
            <WeekData/>
            <WeekData/>
            <WeekData/>
            <WeekData/>
            <WeekData/>
        </div>
        
    </div>
  )
}

export default Aside