import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface TeamProps {
    teamImgSrc: string,
    teamName: string,
    teamBetAmount: number
}

interface SportsQuickBetCardProps {
    sportImgSrc: string,
    league: string,
    date: Date,
    team1: TeamProps,
    team2: TeamProps,
    drawAmount: number 
    gameType: '1x2' | 'Winner' | 'Total' | 'Winner (incl. overtime)'
}

const SportsQuickBetCard = () => {
  return (
    <div className='bg-gray-400 w-full h-36 rounded-xl p-2 font-semibold text-sm text-white'>
        <div className='flex justify-between items-center text-gray-300'>
            <div className='flex gap-1 items-center'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Sports Icon' width={20} height={20}></Image>
                </div>
                <p className='text-nowrap truncate w-[220px]'>International Clubs UEFA Championship League</p>
            </div>
            <p>May 8, 3:00</p>
        </div>

        <div className='flex justify-between my-2'>
            <div className='flex flex-col items-start'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={40} height={40}></Image>
                </div>
                <p>Paris Saint-Germain</p>
            </div>
            <div className='flex flex-col items-end'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={40} height={40}></Image>
                </div>
                <p>Paris Saint-Germain</p>
            </div>
        </div>

        <div className='flex justify-between gap-2 text-xs my-2'>
            <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                <p>1</p>
                <p>1.50</p>
            </button>
            <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                <p>draw</p>
                <p>4.40</p>
            </button>
            <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                <p>2</p>
                <p>6.20</p>
            </button>
        </div>
    </div>
  )
}

export default SportsQuickBetCard