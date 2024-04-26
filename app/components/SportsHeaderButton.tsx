import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const SportsHeaderButton = () => {
  return (
    <button className='w-12 h-12 flex items-center justify-center'>
        <Image src={`${basePath}/images/sports-image.png`} alt='Sports Header Button Image' width={20} height={20} />
    </button>
  )
}

export default SportsHeaderButton