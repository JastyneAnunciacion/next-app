import React from 'react'
import ShareButton from '../ShareButton'
import CopyTextTemplate from '../copy/CopyTextTemplate'


const ReferralLink = () => {
  return (
    <div className='w-full flex flex-col gap-[14px] mb-[20px]'>
      <p className='text-[#b575e1] text-[20px]'>Your Referral Link</p>
      <div className='flex w-full gap-2 h-[60px] items-center justify-center'>
        <div className='w-[268px]'>
          <CopyTextTemplate textToCopy='https://phx.gamble/examplereferralcode' textWidth='w-[181px]' />
        </div>
        <div className='h-[49px] w-[193px]'>
          <ShareButton />
        </div>
      </div>
    </div>
  )
}

export default ReferralLink