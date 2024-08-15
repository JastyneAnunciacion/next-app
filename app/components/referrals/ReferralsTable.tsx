import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SmallIcon from '../SmallIcon'

const ReferralsTable = () => {
  return (
    <div className='w-full text-[3.33vw] font-medium'>
      <div className='flex gap-[1.45vw] items-center mb-[2.29vw]'>
        <SmallIcon
          circleSize='6.25vw'
          iconSize='3.13vw'
          iconSrc='/images/credit-card-image.png'
          iconAspectWidth={15}
          iconAspectHeight={11}
        />
        <p className='text-[4.16vw]'>Your Referrals</p>
      </div>
      <div className='flex flex-col bg-[#241b42] h-[60.42vw] rounded-xl overflow-hidden mb-[3.54vw]'>
        <div className='flex bg-[#6A6482] h-[8.54vw] pl-[4.17vw] items-center justify-between'>
          <p className='w-full'>Type</p>
          <p className='w-full'>Amount</p>
          <p className='w-full'>Status</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-[2.26vw]'>
        <button className='bg-gradient-to-l from-[#8558d9] to-[#782bf6] rounded-xl w-[9.61vw] aspect-square flex justify-center items-center'>
          <div className='w-[3.20vw] aspect-[15.38/20] flex items-center justify-centers'>
            <Image src={`${basePath}/images/left-thin-arrow-image.png`} alt="Left Arrow" layout='responsive' width={100} height={100} />
          </div>
        </button>
        <div className='bg-[#8558d9] text-white rounded-xl w-[9.61vw] aspect-square flex items-center justify-center'>
          1
        </div>
        <button className='bg-gradient-to-r from-[#8558d9] to-[#782bf6] rounded-xl w-[9.61vw] aspect-square flex justify-center items-center'>
          <div className='h-[3.20vw] aspect-[15.38/20] flex items-center justify-centers'>
            <Image src={`${basePath}/images/right-thin-arrow-image.png`} alt="Right Arrow" layout='responsive' width={100} height={100} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ReferralsTable