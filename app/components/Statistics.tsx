import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import SmallIcon from './SmallIcon'

const Statistics = () => {
    return (
        <div className='mb-[35px]'>
            <div className='flex items-center justify-center mb-[9px]'>
                <p className='text-[#b575e1] text-responsive-md'>Statistics</p>
            </div>
            <div className='w-full flex flex-col gap-2 text-white'>
                <div className='flex gap-[2.26%]'>
                    <div className='flex flex-col gap-[15px] w-[57.59%] shrink-0 h-[87px] bg-[#241b42] rounded-lg p-[11px]'>
                        <div className='flex gap-[10px] items-center'>
                            <SmallIcon iconSrc='/images/safe-image.png' />
                            <p>Total Wagered</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                    <div className='flex flex-col gap-[15px] w-[39.23%] h-[87px] bg-[#241b42] rounded-lg p-[11px]'>
                        <div className='flex gap-[10px] items-center'>
                            <SmallIcon iconSrc='/images/refresh-image.png' />
                            <p>Total Bets</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] w-full h-[87px] bg-[#241b42] rounded-lg p-[11px]'>
                    <div className='flex gap-[10px] items-center'>
                        <SmallIcon iconSrc='/images/safe-image.png' />
                        <p>Total Wins</p>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics