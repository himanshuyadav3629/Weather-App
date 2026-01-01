import React from 'react'
import Logo from './Logo'
import InputSearch from './InputSearch'


const Navbar = () => {
    return (
        <div className='p-4 flex gap-4 items-center'>
            <Logo/> 
            <InputSearch/>
        </div>
    )
}

export default Navbar