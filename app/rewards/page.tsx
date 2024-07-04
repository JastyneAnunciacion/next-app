import React from 'react'
import QuickMenu from '../components/footers/QuickMenu'
import Header from '../components/Header'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import ReferralInfo from '../components/referrals/ReferralInfo'
import ReferralLink from '../components/referrals/ReferralLink'
import ReferralStatistics from '../components/referrals/ReferralStatistics'
import InvitesPromo from '../components/InvitesPromo'
import ReferralsTable from '../components/referrals/ReferralsTable'
import FAQReferral from '../components/FAQReferral'
import BigBanner from '../components/banners/BigBanner'
import MainComponents from '../components/MainComponents'

const EarnPage = () => {
  return (
    <MainComponents footerPage='Rewards'>
      <div className='px-4 flex flex-col gap-2'>
        <div className='text-lg flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241b42]'>
          <p className='flex justify-center items-center w-full text-[#b575e1] text-xl'>Rewards</p>
        </div>
        <BigBanner />
        <div className='flex items-center gap-3 mt-5 mb-3 bg-[#241b42] p-4 rounded-lg'>
          <div>
            <Image src={`${basePath}/images/profile-image.jpg`} alt='Large Profile Icon' width={100} height={100} className='rounded-full'></Image>
          </div>
          <ReferralInfo />
        </div>
        <ReferralLink />
        <ReferralStatistics />
        <InvitesPromo currentInvites={2} maxInvites={10} />
        <div className='h-11 w-full' />
        <ReferralsTable />
        <div className='h-8 w-full' />
        <FAQReferral />
      </div>
    </MainComponents>
  )
}

export default EarnPage