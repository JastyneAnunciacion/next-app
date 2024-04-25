import React from 'react'
import CopyButton from './CopyButton'
import ShareButton from './ShareButton'


const ReferralLink = () => {
    const referralCode = 'https://phx.gamble/examplereferralcode'
  return (
    <div>
        <p>Your Referral Link:</p>
        <div className='flex gap-2 h-10'>
            <div className='bg-gray-700 text-white h-full w-full rounded-xl flex justify-between p-4 items-center'>
                {referralCode}
                <CopyButton textToCopy={referralCode} />
            </div>
            <ShareButton />
        </div>
    </div>
  )
}

export default ReferralLink