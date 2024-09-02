import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-black text-white p-3 px-24 py-5 font-bold flex flex-col space-y-10 h-96'>
        <h2 className='text-4xl text-blue-200 mt-4'>Sidebar</h2>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='product'>Products</Link>
        <Link to='orders'>Orders</Link> 
    </div>

  )
}

export default Sidebar