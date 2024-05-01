import React from 'react'
import ShareButton from './ShareButton'
import CopyTextTemplate from './CopyTextTemplate'


const ReferralLink = () => {
  return (
    <div>
        <p>Your Referral Link:</p>
        <div className='flex w-full gap-2 h-10 items-center justify-center'>
            <CopyTextTemplate textToCopy='https://phx.gamble/examplereferralcode' />
            <ShareButton />
        </div>
    </div>
  )
}

export default ReferralLink