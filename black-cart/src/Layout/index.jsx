import React from 'react'
import { Outlet } from 'react-router'
// import Navbar from '../components/Navbar'
import Navbar from '../components/Navbar'

function Layout() {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
