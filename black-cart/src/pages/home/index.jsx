import React from 'react'
import HeroSection from '../../components/HeroSection'
import AppLayout from '../../Layout/AppLayout'
import BestDeals from '../../components/BestDeals'
import ShopWithCategories from '../../components/ShopWithCategories'
function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <AppLayout>
        <div className='w-full flex flex-col gap-[30px] md:gap-[50px] lg:gap-[70px] px-2 md:px-5'>
          <HeroSection />
          <BestDeals/>
          <ShopWithCategories/>
        </div>
      </AppLayout>
    </div>
  )
}

export default Home