import React from 'react'
import AppLayout from '../../Layout/AppLayout'
import CustomButton from '../SharedComponents/CustomButton'

function HeroSection() {
    return (
        <div className='w-full flex flex-col gap-[24px]'>
            <div className='mt-[24px] w-full flex-col flex lg:flex-row  items-center justify-center gap-[24px] '>
                <div className='lg:max-w-[872px] w-full md:h-[520px] flex flex-col-reverse md:flex-row items-center justify-between bg-[#F2F4F5] p-[20px] md:p-[56px] rounded-[10px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex flex-col items-start'>
                            <div className='flex flex-row items-center gap-1'>
                                <div className='h-[1px] w-[24px] bg-[#2DA5F3]'></div>
                                <p className='text-[#2DA5F3] text-[16px] md:text-[20px]  font-medium'>THE BEST PLACE TO PLAY</p>
                            </div>
                            <p className='text-[24px] md:text-[28px] lg:text-[32px] font-bold'>Xbox Console</p>
                        </div>
                        <p className='max-w-[356px] w-full text-[16px] md:text-[18px] text-gray-500 font-medium'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                        <CustomButton btnText='Shop Now' />
                    </div>
                    <div className='relative '>
                        <img src='/Image.png' />
                        <div className='absolute top-0 right-0 w-[50px] h-[50px]  md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] bg-[#2DA5F3] rounded-full shrink-0 text-white font-medium text-[18px] md:text-[25px] flex items-center justify-center'>
                            $200
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[424px] w-full flex flex-col md:flex-row lg:flex-col gap-[24px]'>
                    <div className='w-full bg-[#191C1F] h-[248px] px-[24px] rounded-[10px] flex flex-row items-center gap-2 justify-between'>
                        <div className='flex flex-col items-start '>
                            <p className='text-[#EBC80C] text-[16px] font-medium'>SUMMER SALES</p>
                            <p className='text-[18px] text-[#FFFFFF]'>New google pixel 6 pro</p>
                            <CustomButton mt="18px" btnText={"Shop Now"} />
                        </div>
                        <div className='relative '>
                            <img src='/image5.png' />
                            <div className='bg-[#EBC80C] w-[102px] h-[40px] flex items-center justify-center absolute -top-[20px] right-0'>20% OFF</div>
                        </div>
                    </div>
                    <div className='w-full  bg-[#F2F4F5] h-[248px] rounded-[10px] p-[14px] flex flex-row items-center justify-between gap-[20px]'>

                        <div className='flex flex-col gap-[12px]'>
                            <p className='text-[22px] font-bold '>Xiaomi FlipBuds Pro</p>
                            <p className='text-[#2DA5F3] text-[18px] font-medium'>$299 USD</p>
                            <CustomButton btnText="Shop Now" />
                        </div>
                        <div>
                            <img src='/image4.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
