import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Statistics = () => {
    return (
        <div>
            <div className='flex gap-1 mt-3 items-center justify-center'>
                <p className='text-[#b575e1] text-xl'>Statistics</p>
            </div>
            <div className='w-full flex flex-col gap-2 mt-3 text-white'>
                <div className='flex gap-2'>
                    <div className='w-7/12 shrink-0 h-[70px] bg-[#241b42] rounded-lg p-2'>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                                {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Total Wagered Icon' width={20} height={20}></Image> */}
                            </div>
                            <p>Total Wagered</p>
                        </div>
                        <p>0.00</p>
                    </div>
                    <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2'>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                                {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Total Bets Icon' width={20} height={20}></Image> */}
                            </div>
                            <p>Total Bets</p>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2'>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                            {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Total Wins Icon' width={20} height={20}></Image> */}
                        </div>
                        <p>Total Wins</p>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics