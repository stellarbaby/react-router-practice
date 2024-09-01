import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/dashboard')
    }
  return (
    <div className='p-16'>
        <h2 className='text-3xl font-bold'>Home Page</h2>
        <button className='bg-blue-400 text-black mt-4 p-3'
        onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home