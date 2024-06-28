import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

const ReferralsTable = () => {
  return (
    <div>
      <div className='flex gap-1 items-center'>
        <div>
          <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
          {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Referral Icon' width={20} height={20}></Image> */}
        </div>
        <p>Your Referrals</p>
      </div>
      <div className='flex flex-col mt-2 bg-[#241b42] h-64 rounded-xl overflow-hidden'>
        <div className='flex bg-[#6b6483] justify-between text-white text-sm font'>
          <p className='w-full p-2'>Type</p>
          <p className='w-full p-2'>Amount</p>
          <p className='w-full p-2'>Status</p>
        </div>
      </div>

      <div className='flex items-center justify-center mt-3 gap-2'>
        <button className='bg-gradient-to-l from-[#8558d9] to-[#782bf6] rounded-xl w-10 h-10 p-1 flex justify-between items-center'>
          <Image src={`${basePath}/images/left-arrow-image.png`} alt="Left Arrow" width={30} height={30} />
        </button>
        <div className='bg-[#8558d9] text-white rounded-xl w-10 h-10 flex items-center justify-center'>
          1
        </div>
        <button className='bg-gradient-to-r from-[#8558d9] to-[#782bf6] rounded-xl w-10 h-10 p-1 flex justify-between items-center'>
          <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
        </button>
      </div>
    </div>
  )
}

export default ReferralsTable