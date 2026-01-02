import React from 'react'
import Logo from './Logo'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <div className='Navbar flex items-center gap-5'>
        <Logo/>
        <InputSearch/>
    </div>
  )
}

export default Navbar