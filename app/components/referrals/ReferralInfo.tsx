import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralInfo = () => {
    return (
        <div className='flex h-[109px] w-full items-center gap-[15px] mb-[33px] bg-[#241b42] px-5 py-[13px] rounded-lg responsive-text'>
            <div className='h-auto'>
                <Image src={`${basePath}/images/temporary-profile-medium-image.png`} alt='Medium Profile Icon' layout='responsive' width={18.82} height={100} className='rounded-full' />
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='font-[24px]'>Username</p>
                    <div className='flex gap-[10px] items-center'>
                        <div>
                            <SmallIcon circleWidthPixel={30} circleHeightPixel={30} iconSrc='/images/referral-rank-icon.png' iconWidthPixel={16} iconHeightPixel={16} />
                        </div>
                        <p className='text-[#D187FF]'>New Player</p>
                    </div>
                </div>
                <div className='bg-[#352C58] text-[#D187FF] h-[49px] w-[21.54%] flex items-center justify-center rounded-2xl mr-[10.20%]'>
                    10%
                </div>
            </div>
        </div>
    )
}

export default ReferralInfo