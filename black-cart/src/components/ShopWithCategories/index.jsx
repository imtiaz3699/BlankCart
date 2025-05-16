import React, { useRef, useState } from 'react';
import SectionHeading from '../SharedComponents/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
function ShopWithCategories() {
  const data = [
    {
      name:"Computer And Laptops",
      img:"/computer.png"
    },
    {
      name:"Smart Phones",
      img:"/phone.png"
    },
    {
      name:"Headphones",
      img:"/headphone.png"
    },
    {
      name:"Accessories",
      img:"/keyboard.png"
    },
    {
      name:"Camera",
      img:"/camera.png"
    },
    {
      name:"TV & Homes",
      img:"/tv.png"
    },
  ]
  return (
    <div className = 'w-full flex flex-col gap-[24px]'>
      <p className = 'text-[24px] md:text-[26px] lg:text-[32px] font-bold text-center' >Shop With Categories</p>
      <div className = 'w-full relative'>
          
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
         slidesPerView="auto"
        className="mySwiper"
      >
      {
        data?.map((element,idx)=> {
          return <SwiperSlide key = {idx} className = '!w-[205px] !h-[236px]' style ={{width:'0px',height:"0px"}}
          >
          <div className = 'w-[205px] h-[236px] border-[1px] border-gray-200 flex flex-col items-center justify-center gap-[16px]'>
                <img src = {element?.img} />
                <p className = 'font-bold text-[14px]'>{element?.name}</p>
          </div>
        </SwiperSlide>
        })
      }  
        
      </Swiper>
      </div>
    </div>
  )
}

export default ShopWithCategories
