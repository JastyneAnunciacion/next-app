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
            <div className='w-full mb-[35px]'>
                <div className='flex gap-3 items-center'>
                    <div className='w-full flex flex-col gap-[5px]'>
                        <div className='h-[38px] w-full bg-[#241b42] rounded-full items-center flex justify-center p-1'>
                            <div className='h-2 w-full px-[2.72%] bg-[#241b42] rounded-full'>
                                <div className='h-full bg-[#1fe384] rounded-full'
                                    style={{ width: `${(currentXP / XPrequirement) * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between text-white'>
                            <p className='text-[#b575e1]'>Level {level}</p>
                            <div className='flex'>
                                <p>{currentXP}</p>
                                <p>/{XPrequirement}XP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Level