import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeSecondBanner from '../components/Home/HomeSecondBanner'
import HomeSolutions from '../components/Home/HomeSolutions'
import HomeInovation from '../components/Home/HomeInovation'
import HomeConnectForm from '../components/Home/HomeConnectForm'

function Home() {
  return (
    <div className='bg-[#0b0c0c] text-white z-0 flex justify-start flex-col items-center max-h-fit w-full'>
        <HomeBanner />
        <HomeSecondBanner />
        <HomeSolutions />
        <HomeInovation />
        <HomeConnectForm />
    </div>
  )
}

export default Home