import React from 'react'
import ShareButton from '../ShareButton'
import CopyTextTemplate from '../copy/CopyTextTemplate'


const ReferralLink = () => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-[#b575e1]'>Your Referral Link</p>
      <div className='flex w-full gap-2 h-11 items-center justify-center'>
        <CopyTextTemplate textToCopy='https://phx.gamble/examplereferralcode' />
        <ShareButton />
      </div>
    </div>
  )
}

export default ReferralLink