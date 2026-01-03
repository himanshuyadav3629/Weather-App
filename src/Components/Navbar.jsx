import React from 'react'
import Logo from './Logo'
import InputSearch from './InputSearch'

const Navbar = (props) => {
  
  return (
    <div className='Navbar flex items-center gap-5'>
        <Logo/>
        <InputSearch start={props.start} />
    </div>
  )
}

export default Navbar