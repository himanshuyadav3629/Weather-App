import React, { useEffectEvent } from 'react'
import Navbar from './Navbar'
import Weather from './Weather'
import WeekCondition from './WeekCondition'
import axios from "axios"
import { useEffect, useState } from "react"

const Section = () => {
    

    const [weatherData, setweatherData] = useState("")
    const [forecast, setforecast] = useState("")


    async function cureentWeather(city="Mumbai"){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
        const cureentWeatherData = response.data
        
        setweatherData(cureentWeatherData)
    }
    
    useEffect(()=>{
        cureentWeather()
    },[])
    

 async function foreCast(city="Mumbai") {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);

    const data = response.data;
    setforecast(data.list)
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
}
useEffect(()=>{
    foreCast()
},[])





    return (
        <div className='min-h-screen lg:min-h-full xl:min-h-screen w-full  bg-[url("https://images.unsplash.com/photo-1623285178837-a5eef460979e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  text-white p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-8 lg:flex-row bg-cover bg-center '>
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