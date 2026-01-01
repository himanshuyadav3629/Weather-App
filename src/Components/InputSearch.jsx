import React from 'react'
import { Search } from 'lucide-react';

const InputSearch = () => {
  return (
    <div className='flex gap-4 items-center'>
      <input className='py-6 px-4 text-4xl w-180 rounded-4xl outline-4 outline-emerald-500 text-white' type="text" maxLength={20} placeholder='SEARCH CITY' />
      <button className=' bg-emerald-500 text-white h-20 w-20 flex items-center justify-center rounded-full cursor-pointer active:scale-85 transition-all '><Search/></button>
    </div>
  )
}

export default InputSearch