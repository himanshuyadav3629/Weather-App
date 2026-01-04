import React from 'react'
import WeekDay from './WeekDay'

const WeekCondition = (props) => {
  
  function renderDate(num){
    let date = new Date()
    date.setDate(date.getDate()+num)
    console.log(date)

    return date.toLocaleDateString("en-US",{
      month:"short",
      day:"numeric"
    })

  }
  
  
  
  console.log(props.forecast)
  return (
    <div className='w-full border-4 border-emerald-500 rounded-3xl p-5'>
        <h3 className='sm:text-xl'>7 Days Conditions</h3>
        <br />
        <div className="alldays ">
            <WeekDay node={props.forecast[5]} Day={"Today"} />
            <WeekDay node={props.forecast[13]} Day={renderDate(1)}/>
            <WeekDay node={props.forecast[21]} Day={renderDate(2)} />
            <WeekDay node={props.forecast[29]} Day={renderDate(3)}/>
            <WeekDay node={props.forecast[37]} Day={renderDate(4)} />
            <WeekDay node={props.forecast[33]} Day={renderDate(5)}/>
            <WeekDay node={props.forecast[26]} Day={renderDate(6)} />
        </div>
    </div>
  )
}

export default WeekCondition