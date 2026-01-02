import { Search } from 'lucide-react'
import React from 'react'


const InputSearch = () => {
  return (
    <div className='flex-1 relative flex items-center'>
        <input className='p-2 sm:p-4 lg:p-6 sm:text-lg lg:text-xl rounded-2xl w-full border-2 border-emerald-500 outline-0' type="text" placeholder='ENTER CITY' />
        <button className='absolute active:scale-85 transition-all right-1 bg-emerald-500 p-1 sm:p-3 sm:h-full lg:static lg:ml-2 lg:h-18 lg:w-20 lg:rounded-full lg:flex lg:justify-center lg:items-center sm:right-0.5 rounded-2xl'>< Search /></button>
    </div>
  )
}

export default InputSearch