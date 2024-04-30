'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmallBanner from '../components/SmallBanner'
import TextLink from '../components/TextLink'
import Dropdown from '../components/Dropdown'

const ReferralPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
        <Header />
        <div className='flex justify-center px-5 pt-3 flex-col'>
          <SmallBanner>  
            <p className='text-2xl'>Referral System</p>
            <p className='w-3/5 text-wrap'>Referral Short Description and Promotions</p>
          </SmallBanner>
          <p>Your Affiliate Link</p>
          <div className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'>t.me/exampleBot/exampleaffiliatelink</div>
          <p className='pt-6'>Statisics</p>
        </div>
        <Footer/>
    </div>
  )
}

export default ReferralPage