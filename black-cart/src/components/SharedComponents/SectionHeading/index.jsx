import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function SectionHeading({ heading }) {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className = 'text-[24px] md:text-[26px] lg:text-[32px] font-bold'>{heading}</div>
      <div className='text-[#2DA5F3] text-[16px] font-medium flex flex-row items-center gap-1 hover:underline cursor-pointer'>Browse All Products <FaArrowRight /></div>
    </div>
  )
}

export default SectionHeading
