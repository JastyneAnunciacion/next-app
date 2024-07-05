import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import ReferralInfo from '../components/referrals/ReferralInfo'
import ReferralLink from '../components/referrals/ReferralLink'
import ReferralStatistics from '../components/referrals/ReferralStatistics'
import InvitesPromo from '../components/InvitesPromo'
import ReferralsTable from '../components/referrals/ReferralsTable'
import FAQReferral from '../components/FAQReferral'
import MainComponents from '../components/MainComponents'
import MediumBanner from '../components/banners/MediumBanner'

const RewardsPage = () => {
  return (
    <MainComponents footerPage='Rewards'>
      <div className='flex flex-col items-center w-full'>
        <div className='text-lg flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241b42]'>
          <p className='flex justify-center items-center w-full text-[#b575e1] text-xl'>Rewards</p>
        </div>
        <div className='w-full my-[20px]'>
          <MediumBanner imgSrc='/images/medium-banner-image-1.png' />
        </div>
        <ReferralInfo />
        <ReferralLink />
        <ReferralStatistics />
        <InvitesPromo currentInvites={2} maxInvites={10} />
        <ReferralsTable />
        <FAQReferral />
      </div>
    </MainComponents>
  )
}

export default RewardsPage