import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ShareButton = () => {
  return (
    <div className='bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[0.21vw] rounded-xl'>
      <button className='h-full w-full bg-gradient-to-r from-[#412A78] to-[#221C42] flex items-center gap-[1.67vw] rounded-xl px-[3.54vw]'>
        <div className='w-[4.17vw] aspect-square'>
          <Image src={`${basePath}/images/share-image.png`} alt='Share Icon' layout='responsive' width={100} height={100} />
        </div>
        <div className='text-[3.33vw]'>
          Share
        </div>
      </button>
    </div>
  )
}

export default ShareButton