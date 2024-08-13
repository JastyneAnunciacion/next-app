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
        <div className='text-lg flex items-center justify-between w-full h-[6.74vh] rounded-lg px-4 bg-[#241b42]'>
          <p className='flex justify-center items-center w-full text-[#b575e1] text-[4.17vw] font-semibold'>Rewards</p>
        </div>
        <button className='w-full aspect-[147/71] my-[2.7vh]'>
          <Image src={`${basePath}/images/medium-banner-image-1.png`} alt='Reward Banner Image' layout='responsive' width={100} height={100} />
        </button>
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