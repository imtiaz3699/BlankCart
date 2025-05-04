import React from 'react'
import AppLayout from '../../Layout/AppLayout'
import { Input } from 'antd'
import { ShoppingCart, Heart, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'
import SubNav from './SubNav'
function Navbar() {
  const navigate = useNavigate();
  return (

    <nav className='w-full flex flex-col'>
      <div className='w-full flex items-center justify-center bg-[#1B6392] py-[20px]'>
        <AppLayout>
          <div className='w-full  flex-row items-center justify-between gap-[20px] px-5 hidden md:flex'>
            <img src='/logo.png' onClick={() => navigate('/')} className=' rounded-full shrink-0 w-[60px] h-[60px]' />
            <div className='max-w-[646px] w-full'>
              <Input
                suffix={<img src='/MagnifyingGlass.png' className='w-[24px] h-[24px]' />}
                className='max-w-[646px] w-full !h-[48px]'
                placeholder='Search For anything....' />
            </div>
            <div className='flex flex-row items-center gap-[24px]'>
              <ShoppingCart color='white' cursor='pointer' />
              <Heart color='white' cursor='pointer' />
              <UserRound color='white' cursor='pointer' />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-full px-2  md:hidden'>
            <div className='flex flex-row items-center justify-between w-full'>
              <img src='/logo.png' onClick={() => navigate('/')} className=' rounded-full shrink-0 w-[60px] h-[60px]' />
              <div className='flex flex-row items-center gap-[24px]'>
                <ShoppingCart color='white' cursor='pointer' />
                <Heart color='white' cursor='pointer' />
                <UserRound color='white' cursor='pointer' />
              </div>
            </div>
            <div className=' w-full'>
              <Input
                suffix={<img src='/MagnifyingGlass.png' className='w-[24px] h-[24px]' />}
                className='w-full !h-[48px]'
                placeholder='Search For anything....' />
            </div>
          </div>
        </AppLayout>
      </div>
      <SubNav />
    </nav>
  )
}

export default Navbar
