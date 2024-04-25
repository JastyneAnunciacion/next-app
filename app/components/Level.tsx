import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface LevelProps {
    level?: number,
    levelImgSrc?: string,
    currentXP?: number,
    XPrequirement?: number,
}
const Level = ({level = 1, levelImgSrc='/images/level-image.png', currentXP=3, XPrequirement=10}: LevelProps) => {
  return (
    <div>
        <div className='w-full h-12 bg-gray-600 rounded-lg'>
            <div className='flex p-2 gap-3 items-center'>
                <div>
                    <Image src={`${basePath}${levelImgSrc}`} alt='Level Icon' width={30} height={30} />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <div className='h-1 w-full bg-gray-950 rounded-full'>
                         <div className='h-full bg-blue-500 rounded-full' 
                         style={{ width: `${(currentXP / XPrequirement) * 100}%` }}
                    />
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-yellow-500'>Level {level}</p>
                        <div className='flex'>
                            <p className='font-bold'>{currentXP}</p>
                            <p className=''>/{XPrequirement}XP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Level