import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ShareButton = () => {
  return (
    <button className='h-full w-36 bg-gray-900 text-white flex items-center justify-center gap-2 rounded-xl p-1'>
        <div>
            Share
        </div>
        <div>
            <Image src={`${basePath}/images/share-image.png`} alt='Share Icon' width={15} height={15} />
        </div>
    </button>
  )
}

export default ShareButton