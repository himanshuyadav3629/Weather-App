import React, { useEffectEvent } from 'react'
import Navbar from './Navbar'
import Weather from './Weather'
import WeekCondition from './WeekCondition'
import axios from "axios"
import { useEffect, useState } from "react"

const Section = () => {
    const apikey = "b74bfb63e08fa88e25e98634eb842f36"

    const [weatherData, setweatherData] = useState("")
    const [forecast, setforecast] = useState("")


    async function cureentWeather(city="Mumbai"){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        const cureentWeatherData = response.data
        console.log(cureentWeatherData)
        setweatherData(cureentWeatherData)
    }
    
    useEffect(()=>{
        cureentWeather()
    },[])
    

 async function foreCast(city="Mumbai") {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`);

    const data = response.data;
    console.log(data); // contains list[] → 3-hourly forecasts
    setforecast(data.list)
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
}
useEffect(()=>{
    foreCast()
},[])





    return (
        <div className='min-h-screen lg:min-h-full xl:min-h-screen w-full bg-black text-white p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-8 lg:flex-row '>
            <div className='lg:w-2/3 ' >
                <Navbar start={cureentWeather} week={foreCast} />
                <Weather weatherData={weatherData} />
            </div>
            <div className='lg:w-1/3'>
                <WeekCondition forecast={forecast} />
            </div>
        </div>
    )
}

export default Section