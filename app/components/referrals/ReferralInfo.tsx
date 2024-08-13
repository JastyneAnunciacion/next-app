import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralInfo = () => {
    return (
        <div className='flex h-[109px] w-full items-center gap-[15px] mb-[33px] bg-[#241b42] py-[13px] rounded-lg responsive-text justify-between'>
            <div className='flex items-center gap-[15px] ml-[4.53%]'>
                <div className='h-auto'>
                    <Image src={`${basePath}/images/temporary-profile-medium-image.png`} alt='Medium Profile Icon' layout='responsive' width={18.82} height={100} className='rounded-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-responsive-lg'>Username</p>
                    <div className='flex gap-[10px] items-center'>
                        <div>
                            <SmallIcon
                                circleSize='6.25vw'
                                iconSize='3.33vw'
                                iconSrc='/images/referral-rank-icon.png'
                            />
                        </div>
                        <p className='text-[#D187FF]'>New Player</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#352C58] text-[#D187FF] h-[49px] w-[21.54%] flex text-responsive-md items-center justify-center rounded-2xl mr-[10.20%]'>
                10%
            </div>
        </div>
    )
}

export default ReferralInfo