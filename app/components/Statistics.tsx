import React from 'react'
import SmallIcon from './SmallIcon'

const Statistics = () => {
    return (
        <div className='flex flex-col gap-[1.87vw]'>
            <div className='flex items-center justify-center'>
                <p className='text-[#D187FF] text-[4.17vw]'>Statistics</p>
            </div>
            <div className='w-full flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[2.08vw]'>
                    <div className='flex flex-col gap-[3.13vw] w-[53.54vw] aspect-[257/87] bg-[#241b42] rounded-2xl px-[2.29vw] pt-[2.29vw]'>
                        <div className='flex gap-[2.08vw] items-center'>
                            <SmallIcon
                                circleSize='6.25vw'
                                iconSize='2.70vw'
                                iconAspectWidth={13}
                                iconAspectHeight={14}
                                iconSrc='/images/safe-image.png'
                            />
                            <p>Total Wagered</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                    <div className='flex flex-col gap-[3.13vw] w-[36.04vw] aspect-[173/87] bg-[#241b42] rounded-2xl px-[2.29vw] pt-[2.29vw]'>
                        <div className='flex gap-[2.08vw] items-center'>
                            <SmallIcon
                                circleSize='6.25vw'
                                iconSize='3.44vw'
                                iconAspectWidth={16.5}
                                iconAspectHeight={11.5}
                                iconSrc='/images/refresh-image.png'
                            />
                            <p>Total Bets</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[3.13vw] w-full aspect-[440/87] bg-[#241b42] rounded-2xl px-[2.29vw] pt-[2.29vw]'>
                    <div className='flex gap-[2.08vw] items-center'>
                        <SmallIcon
                            circleSize='6.25vw'
                            iconSize='2.70vw'
                            iconAspectWidth={13}
                            iconAspectHeight={14}
                            iconSrc='/images/safe-image.png'
                        />
                        <p>Total Wins</p>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics