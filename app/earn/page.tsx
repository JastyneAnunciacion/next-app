import React from 'react'
import Footer from '../components/footers/Footer'
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

const EarnPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
      <Header />
      <div className='px-4 flex flex-col gap-2'>
        <p className='my-5 text-lg font-bold'>Rewards</p>
        <BigBanner />
        <div className='flex items-center gap-3 mt-5 mb-3'>
          <div>
            <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={80} height={80}></Image>
          </div>
          <ReferralInfo />
        </div>
        <ReferralLink />
        <ReferralStatistics />
        <InvitesPromo currentInvites={2} maxInvites={10} />
        <ReferralsTable />
        <FAQReferral />
      </div>
      <Footer currentPage='Earn' />
    </div>
  )
}

export default EarnPage