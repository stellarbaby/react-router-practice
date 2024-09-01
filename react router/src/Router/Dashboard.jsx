import React from 'react'
import Sidebar from './Sidebar'

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