import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className='flex space-x-16'>
        <div>
            <Sidebar />
        </div>
        <div>
            <Outlet ></Outlet>
        </div>
    </div>
  )
}

export default Dashboard