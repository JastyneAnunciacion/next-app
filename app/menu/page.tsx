'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmallBanner from '../components/SmallBanner'
import TextLink from '../components/TextLink'
import Dropdown from '../components/Dropdown'

const MenuPage = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-center px-5 pt-3 flex-col'>
          <SmallBanner>  
            <p className='w-3/5 text-wrap'>Site Promotions and Other Bonuses Offered at PHX Gamble</p>
            <p className='text-2xl'>PHX.GAMBLE</p>
          </SmallBanner>
          <div className='mt-5 font-bold'>
            <TextLink text='PHX.GAMBLE' linkHref='/' onClick={() => console.log('')} hasImage={true}/>
          </div>
          <div className='mt-7 text-lg'>
            <Dropdown title='User'>
              <div className='flex flex-col mt-4 gap-2 text-'>
                <TextLink text='Profile' linkHref='/profile' onClick={() => console.log('')} hasImage={true} customLinkSrc='/images/profile-image.png' showImageOnRightSideOfText={false} customImageWidth={20} customImageHeight={20}/>
                <TextLink text='Referrals' linkHref='/referral' onClick={() => console.log('')} hasImage={true} customLinkSrc='/images/referal-image.png' showImageOnRightSideOfText={false} customImageWidth={20} customImageHeight={20}/>
              </div>
            </Dropdown>
          </div>
        </div>
        <Footer currentPage="Menu"/>
    </div>
  )
}

export default MenuPage