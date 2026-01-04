import React from 'react'
import AirCondition from './AirCondition'
import sun from "../assets/sun.png"
import InputSearch from './InputSearch'
import 'remixicon/fonts/remixicon.css'


const Weather = (props) => {

let temp = props.weatherData?.main?.temp
  ? Math.floor(props.weatherData.main.temp - 273.15)
  : "--";
  const weatherMain = props.weatherData?.weather?.[0]?.main;


    return (
        
        <div className='weather flex flex-col gap-6 lg:gap-12 mt-4 lg:mt-4 pointer-events-none select-none'>
            <div className='w-full border-4 border-emerald-500 rounded-3xl p-5 sm:p-8 flex justify-around md:justify-between lg:justify-between xl:justify-between 2xl:justify-between  gap-2 backdrop-blur-lg'>
                <div className="leftdata w-fit flex flex-col items-center ">
                    <h2 className='whitespace text-4xl lg:text-6xl whitespace-nowrap'>{props.weatherData.name}</h2>
                    <h5 className='mt-6 text-xl lg:text-4xl'>{weatherMain}</h5>
                    <div className="temp text-5xl lg:text-8xl mt-6 lg:mt-15">
                        {temp<10&&temp>0?"0"+temp:temp}°C
                    </div>
                </div>
                <div className="rightdata  w-fit flex items-center">
                    <img className='h-20  sm:h-30 sm:w-30 w-20 lg:h-50 lg:w-50' src={`/Condition/${weatherMain}.png`} alt={props.weatherData?.weather?.[0]?.main} />
                </div>
            </div>
            <div className='aircondition border-4 border-emerald-500 rounded-3xl p-5 lg:p-8 backdrop-blur-lg'>
                <h2 className='sm:text-2xl lg:text-3xl'>Air Conditions</h2>
                <div className='flex flex-wrap justify-between gap-2 mt-4 sm:mt-6'>
                    <AirCondition val={Math.floor(props.weatherData?.main?.feels_like-273.15)+"°C"} title={"Feels Like"} />
                    <AirCondition val={props.weatherData?.main?.humidity+" %"} title={"Humidity"}/>
                    <AirCondition val={props.weatherData?.visibility/1000+" km"} title={"Visibility"}/>
                    <AirCondition val={props.weatherData?.main?.pressure+" mb"} title={"Pressure"} />
                </div>
            </div>
        </div>
    )
}

export default Weather