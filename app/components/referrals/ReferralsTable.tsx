import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralsTable = () => {
  return (
    <div className='w-full mb-[56px]'>
      <div className='flex gap-[7px] items-center'>
        <SmallIcon circleWidthPixel={30} circleHeightPixel={30} iconSrc='/images/your-referrals-images.png' iconWidthPixel={15} iconHeightPixel={15} />
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