import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Statistics = () => {
  return (
    <div>
        <div className='flex gap-1'>
            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
            <p className='font-semibold'>Statistics</p>
        </div>
        <div className='w-full flex flex-col gap-2 mt-3'>
            <div className='flex gap-2'>
                <div className='w-7/12 shrink-0 h-[70px] bg-gray-400 rounded-lg p-2'>
                    <div className='flex gap-1'>
                        <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
                        <p>Total Wagered</p>
                    </div>
                    <p>0.00</p>
                </div>
                <div className='w-full h-[70px] bg-gray-400 rounded-lg p-2'>
                    <div className='flex gap-1'>
                        <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
                        <p>Total Bets</p>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
            <div className='w-full h-[70px] bg-gray-400 rounded-lg p-2'>
                <div className='flex gap-1'>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
                    <p>Total Wins</p>
                </div>
                <p>0.00</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics