import React from 'react'
import AirData from './AirData'


const Condition = () => {
    return (
        <div className='border-4 border-emerald-500 p-8 pb-0 rounded-4xl'>
            <h2 className='text-3xl'>Air Conditions</h2>
            <div className="alldata flex justify-between p-4">
                <AirData/>
                <AirData/> 
                <AirData/>
                <AirData/>
            </div>
        </div>
    )
}

export default Condition