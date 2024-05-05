import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeSecondBanner from '../components/Home/HomeSecondBanner'

function Home() {
  return (
    <div className='bg-[#0b0c0c] text-white z-0 flex justify-start items-center max-h-fit w-full'>
        <HomeBanner />
        <HomeSecondBanner />
    </div>
  )
}

export default Home