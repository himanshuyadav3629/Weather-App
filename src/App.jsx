import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Aside from './Components/Aside'

const App = () => {
  return (
    <div className='bg-gray-900 h-screen flex p-4'>
      <div className='flex flex-col gap-10'>
      <Navbar/>
      <Hero/>
    </div>
    <div className="aside bg-gray-900 w-1/3 p-8 pb-0 border-4 border-emerald-500 rounded-4xl">
        <Aside/>
      </div>
    </div>
  )
}

export default App