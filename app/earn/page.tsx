import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BigBanner from '../components/BigBanner'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import ReferralInfo from '../components/ReferralInfo'
import ReferralLink from '../components/ReferralLink'
import ReferralStatistics from '../components/ReferralStatistics'

const EarnPage = () => {
  return (
    <div>
        <Header />
        <div className='px-4'>
            <p className='my-5'>Rewards</p>
            <BigBanner />
            <div className='flex items-center gap-3 mt-5 mb-3'>
                <div>
                    <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={80} height={80}></Image>
                </div>
                <ReferralInfo />
            </div>
            <ReferralLink />
            <ReferralStatistics />
        </div>
        <Footer currentPage='Earn' />
    </div>
  )
}

export default EarnPage