import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const id = 25;
  return (
    <div className='bg-black text-white p-3 px-24 py-5 font-bold flex space-x-10'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to={`/profile/${id}`}>Profile</Link>
    </div>
  )
}


export default Navbar