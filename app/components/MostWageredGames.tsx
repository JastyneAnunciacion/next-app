import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const MostWageredGames = () => {
  return (
    <div>
        <div className='flex gap-1'>
            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
            <p className='font-semibold'>Most Wagered Games</p>
        </div>
    </div>
  )
}

export default MostWageredGames