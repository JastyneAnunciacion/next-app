import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralInfo = () => {
    return (
        <div className='flex h-[109px] w-full items-center gap-[15px] mb-[33px] bg-[#241b42] px-5 py-[13px] rounded-lg'>
            <div>
                <Image src={`${basePath}/images/temporary-profile-medium-image.jpg`} alt='Medium Profile Icon' width={83} height={84} className='rounded-full' />
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-[24px]'>Username</p>
                    <div className='flex gap-[10px] items-center'>
                        <div>
                            <SmallIcon circleWidthPixel={30} circleHeightPixel={30} iconSrc='/images/referral-rank-icon.png' />
                        </div>
                        <p className='text-[16px] text-[#D187FF]'>Referral Rank</p>
                    </div>
                </div>
                <div className='bg-[#352C58] text-[#D187FF] text-[24px] h-[49px] w-[95px] flex items-center justify-center rounded-2xl mr-[25px]'>
                    10%
                </div>
            </div>
        </div>
    )
}

export default ReferralInfo