import React from 'react'
import ShareButton from '../ShareButton'
import CopyTextTemplate from '../copy/CopyTextTemplate'


const ReferralLink = () => {
  return (
    <div className='w-full flex flex-col gap-[2.29vh] mb-[2.7vh]'>
      <p className='text-[#D187FF] ml-[1.25vw] text-[4.17vw]'>Your Referral Link</p>
      <div className='relative flex w-full items-center justify-start'>
        <div className='w-[55.83vw] aspect-[67/15]'>
          <CopyTextTemplate textToCopy='https://phx.gamble/examplereferralcode' />
        </div>
        <div className='absolute w-[40.21vw] aspect-[193/49] pl-[1.66vw] right-[-4.58vw]'>
          <ShareButton />
        </div>
      </div>
    </div>
  )
}

export default ReferralLink