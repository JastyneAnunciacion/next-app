import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

const ReferralsTable = () => {
  return (
    <div>
      <div className='flex gap-1 items-center'>
        <div>
          <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Referral Icon' width={20} height={20}></Image>
        </div>
        <p className='font-semibold'>Your Referrals</p>
      </div>
      <div className='flex flex-col mt-2 bg-gray-500 h-64 rounded-xl overflow-hidden'>
        <div className='flex w-full bg-gray-600 justify-between text-white text-sm font'>
          <p className='p-2'>Type</p>
          <p className='p-2'>Amount</p>
          <p className='p-2'>Status</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 p-4 my-auto'>
          <div>
            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='No Referrals Icon' width={50} height={50}></Image>
          </div>
          <div className='flex flex-col items-center justify-center text-white'>
            <p className='font-bold'>No Referrals</p>
            <p className='text-sm'>Share your code with friends and earn.</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-3 gap-1'>
        <button className='bg-gray-700 text-gray-400 rounded-xl w-10 h-10 p-1 flex justify-between items-center'>
          <Image src={`${basePath}/images/left-arrow-image.png`} alt="Left Arrow" width={30} height={30} />
        </button>
        <div className='bg-gray-500 text-gray-300 rounded-xl w-10 h-10 flex items-center justify-center'>
          1
        </div>
        <button className='bg-gray-700 text-gray-400 rounded-xl w-10 h-10 p-1 flex justify-between items-center'>
          <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
        </button>
      </div>
    </div>
  )
}

export default ReferralsTable