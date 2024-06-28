import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ShareButton = () => {
  return (
    <div className='bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-28 h-11 p-[1px] rounded-lg'>
      <button className='h-full w-full bg-gradient-to-r from-[#412974] to-[#231d42] text-white flex items-center gap-1 rounded-lg p-3'>
        <div>
          <Image src={`${basePath}/images/share-image.png`} alt='Share Icon' width={15} height={15} />
        </div>
        <div className='text-xs'>
          Share
        </div>
      </button>
    </div>
  )
}

export default ShareButton