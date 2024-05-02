import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface TeamProps {
    teamImgSrc: string,
    teamName: string,
    teamBetAmount: number
}

interface SportsBetCardProps {
    sportImgSrc: string,
    league: string,
    date: Date,
    team1: TeamProps,
    team2: TeamProps,
    drawAmount: number
    gameType: '1x2' | 'Winner' | 'Total' | 'Winner (incl. overtime)'
}

const SportsBetCard = () => {
  return (
    <div className='bg-gray-400 w-full h-48 rounded-xl p-2 font-semibold text-sm text-white flex flex-col gap-2'>
        <div className='flex justify-between items-center text-gray-300'>
            <div className='flex gap-1 items-center'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Sports Icon' width={20} height={20}></Image>
                </div>
                <p className='text-nowrap'>International Clubs UEFA Championship League</p>
            </div>
            <button>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Favorites Icon' width={20} height={20}></Image>
            </button>
        </div>

        <div className='flex gap-1 items-center'>
            <p>May 8, 3:00</p>
            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Icon' width={15} height={15}></Image>
        </div>

        <div className='flex gap-3'>
            <div>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={22} height={22}></Image>
            </div>
            <p>Paris Saint-Germain</p>
        </div>
        <div className='flex gap-3'>
            <div>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={22} height={22}></Image>
            </div>
            <p>Paris Saint-Germain</p>
        </div>

        <p>Winner</p>


        <div className='flex justify-between gap-2 text-xs'>
            <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                <p>1</p>
                <p>1.50</p>
            </button>
            {/* {gameType === '1x2' &&  */}
                <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                    <p>draw</p>
                    <p>4.40</p>
                </button>
            {/* } */}
            <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                <p>2</p>
                <p>6.20</p>
            </button>
            {/* <button className='bg-gray-600 p-1 w-full h-8 flex justify-between items-center rounded-lg'>
                
            </button> */}
        </div>
    </div>
  )
}

export default SportsBetCard