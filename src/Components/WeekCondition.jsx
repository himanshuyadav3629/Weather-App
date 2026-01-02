import React from 'react'
import WeekDay from './WeekDay'

const WeekCondition = () => {
  return (
    <div className='w-full border-2 border-emerald-500 rounded-3xl p-5'>
        <h3 className='sm:text-xl'>7 Days Conditions</h3>
        <br />
        <div className="alldays ">
            <WeekDay/>
            <WeekDay/>
            <WeekDay/>
            <WeekDay/>
            <WeekDay/>
            <WeekDay/>
            <WeekDay/>
        </div>
    </div>
  )
}

export default WeekCondition