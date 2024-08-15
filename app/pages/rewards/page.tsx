import React from 'react'
import ReferralInfo from '../../components/referrals/ReferralInfo'
import ReferralLink from '../../components/referrals/ReferralLink'
import ReferralStatistics from '../../components/referrals/ReferralStatistics'
import InvitesPromo from '../../components/InvitesPromo'
import ReferralsTable from '../../components/referrals/ReferralsTable'
import FAQReferral from '../../components/FAQReferral'
import MainComponents from '../../components/MainComponents'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const RewardsPage = () => {
  return (
    <MainComponents footerPage='Rewards'>
      <div className='flex flex-col items-center w-full px-[4.17vw] font-manrope'>
        <div className='flex items-center justify-between w-full h-[6.74vh] rounded-lg bg-[#241b42]'>
          <p className='flex justify-center items-center w-full text-[#D187FF] text-[4.17vw] font-semibold'>Rewards</p>
        </div>
        <button className='w-full aspect-[147/71] my-[4.17vw]'>
          <Image src={`${basePath}/images/medium-banner-image-1.png`} alt='Reward Banner Image' layout='responsive' width={100} height={100} />
        </button>
        <div className='w-full aspect-[441/109] mb-[6.88vw]'>
          <ReferralInfo />
        </div>
        <div className='w-full mb-[4.17vw]'>
          <ReferralLink />
        </div>
        <div className='w-full'>
          <ReferralStatistics />
        </div>
        <div className='w-full mb-[11.25vw]'>
          <InvitesPromo currentInvites={2} maxInvites={10} />
        </div>
        <div className='w-full mb-[11.25vw]'>
          <ReferralsTable />
        </div>
        <div className='w-full'>
          <FAQReferral />
        </div>
      </div>
    </MainComponents>
  )
}

export default RewardsPage