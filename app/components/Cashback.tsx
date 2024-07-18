import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import SmallIcon from './SmallIcon'

const Cashback = () => {
  return (
    <div className='mb-[35px] responsive-text'>
      <div className='flex gap-1 items-center justify-center'>
        <p className='text-[#b575e1] text-responsive-md'>Cashback</p>
      </div>
      <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-[11px] mt-3 flex gap-[11px] items-center'>
        <SmallIcon
          iconSrc='images/exchange-image.png'
          circleWidthPixel={52}
          circleHeightPixel={52}
          iconHeightPixel={25}
          iconWidthPixel={25}
        />
        <div className='flex w-full justify-between items-center text-responsive-sm'>
          <p>Your cashback:</p>
          <p className='mr-[40px]'>5%</p>
        </div>
      </div>
    </div>
  )
}

export default Cashback