import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface LevelProps {
    level?: number,
    levelImgSrc?: string,
    currentXP?: number,
    XPrequirement?: number,
}
const Level = ({ level = 1, levelImgSrc = '/images/level-image.png', currentXP = 3, XPrequirement = 10 }: LevelProps) => {
    return (
        <div>
            <div className='w-full h-12 rounded-lg'>
                <div className='flex p-2 gap-3 items-center'>
                    <div className='w-full flex flex-col gap-1'>
                        <div className='h-[0.9rem] w-full bg-gray-800 rounded-full items-center flex justify-center p-1'>
                            <div className='h-[0.35rem] w-full bg-gray-800 rounded-full'>
                                <div className='h-full bg-[#FF6600] rounded-full'
                                    style={{ width: `${(currentXP / XPrequirement) * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between text-white'>
                            <p className=''>Level {level}</p>
                            <div className='flex'>
                                <p className=''>{currentXP}</p>
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