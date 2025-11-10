import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
<>
  <div className="h-16 bg-white flex items-center w-full">
    <img className="h-8 ml-8!" src={logo} alt="" />
    <h1 className='ml-3! font-bold text-xl'>Santoor Admin</h1>
  </div>
</>
  )
}

export default Navbar
