import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import SmallIcon from './SmallIcon'

const Cashback = () => {
  return (
    <div className='flex flex-col gap-[1.88vw] text-[3.33vw]'>
      <div className='flex gap-1 items-center justify-center'>
        <p className='text-[#D187FF] text-[4.17vw]'>Cashback</p>
      </div>
      <div className='w-full aspect-[440/87] pl-[2.29vw] pr-[10.63vw] bg-[#241b42] rounded-lg flex items-center justify-between'>
        <div className='flex gap-[2.29vw] items-center justify-center'>
          <SmallIcon
            circleSize='10.83vw'
            iconSize='5.21vw'
            iconSrc='/images/exchange-image.png'
          />
          <p>Your cashback:</p>
        </div>
        <p>5%</p>
      </div>
    </div>
  )
}

export default Cashback