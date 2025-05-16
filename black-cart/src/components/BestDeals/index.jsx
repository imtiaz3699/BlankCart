import React from 'react'
import SectionHeading from '../SharedComponents/SectionHeading'
import { Rate } from 'antd';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
function BestDeals() {
  const data = [
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
    {
      description: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$23,00"
    },
  ]
  return (
    <div className='w-full flex flex-col gap-[24px]'>
      <SectionHeading heading="Best Deals" />
      <div className='flex flex-col lg:flex-row items-start border-[1px] border-[#E4E7E9]'>
        <div className=' flex flex-col gap-[24px] p-[24px] border-r-[1px] border-[#E4E7E9] lg:max-w-[328px] w-full'  >
          <div className='h-[500px] lg:h-[268px] relative '>
            <img src='/Image1.png' className='w-full h-full object-contain' />
            <div className='flex flex-col gap-[8px] absolute top-0 left-0'>
              <div className='bg-[#EFD33D] w-[80px] py-[5px] px-[10px] text-center text-[14px]'>
                32% OFF
              </div>
              <div className='bg-[#EE5858] w-[46px] py-[5px] px-[10px] text-center text-white text-[14px]'>
                HOT
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <Rate value={5} />
            <p className='text-[16px] font-medium '>Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</p>
            <p className='text-[16px] font-medium text-[#2DA5F3]'> <span className='text-gray-300 line-through'>$865.99</span> $442.12</p>
            <p className='text-[16px] font-medium text-gray-500'> Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
          </div>
          <div className='flex flex-row items-center justify-between gap-[8px]'>
            <div className='w-[48px] h-[48px] bg-[#FFE7D6] flex items-center justify-center rounded-[5px] shrink-0'>
              <Heart />
            </div>
            <button className='bg-[#FA8232] w-full py-[12px] cursor-pointer   flex items-center justify-center gap-[8px] text-white font-medium '>
              <ShoppingCart color="white" />
              ADD TO CART
            </button>
            <div className='w-[48px] h-[48px] bg-[#FFE7D6] flex items-center justify-center rounded-[5px] shrink-0'>
              <Eye />
            </div>
          </div>
        </div>
        <div className=' w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 '>
          {
            data?.map((element, idx) => {
              return <div className= 'sm:max-w-[248px] w-full py-[20px] px-[16px] flex flex-col items-start justify-center gap-[8px] border-t-[1px] lg:border-t-0 border-r-[1px] border-[1px] border-[#E4E7E9]'>
                <div className='h-[188px] w-full'>
                  <img src='/fladjsfk.png' />
                </div>
                <div className='flex flex-col gap-[8px] items-start justify-start w-full'>
                  <p className='text-[14px] font-medium'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                  <p className='text-[14px] font-medium text-[#2DA5F3]'>$2,300</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BestDeals
