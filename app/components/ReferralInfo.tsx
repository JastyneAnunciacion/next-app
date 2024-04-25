import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ReferralInfo = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        <div>
            <p className='font-bold text-lg'>Username</p>
            <div className='flex gap-2 items-center'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Referral Rank Icon' width={20} height={20}></Image>
                </div>
                <p>Referral Rank</p>
            </div>
        </div>
        <div className='bg-gray-500 text-white font-bold py-4 px-8 rounded-2xl'>
            10%
        </div>
    </div>
  )
}

export default ReferralInfo