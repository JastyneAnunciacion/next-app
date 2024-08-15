import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralInfo = () => {
    return (
        <div className='w-full h-full flex items-center bg-[#241b42] rounded-2xl justify-between'>
            <div className='flex items-center gap-[3.13vw] ml-[4.53%]'>
                <div className='w-[17.29vw] aspect-square'>
                    <Image src={`${basePath}/images/temporary-profile-medium-image.png`} alt='Medium Profile Icon' layout='responsive' width={100} height={100} />
                </div>
                <div className='flex flex-col gap-[2.08vw] font-medium'>
                    <p className='text-[5vw]'>Username</p>
                    <div className='flex gap-[2.29vw] items-center'>
                        <div>
                            <SmallIcon
                                circleSize='6.25vw'
                                iconSize='3.33vw'
                                iconSrc='/images/referral-rank-icon.png'
                            />
                        </div>
                        <p className='text-[#D187FF] text-[3.33vw]'>New Player</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#352C58] text-[#D187FF] w-[19.79vw] aspect-[95/49] flex font-medium text-[5vw] items-center justify-center rounded-2xl mr-[10.20%]'>
                10%
            </div>
        </div >
    )
}

export default ReferralInfo