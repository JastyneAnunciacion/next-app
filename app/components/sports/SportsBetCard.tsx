'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import basePath from '../../utilities/basepath';
import SportsBetCardOverButtons from './SportsBetCardOverButtons';

interface TeamProps {
    teamImgSrc: string;
    teamName: string;
    teamBetAmount: number;
}

interface SportsBetCardProps {
    sportImgSrc?: string;
    league?: string;
    date?: string;
    team1?: TeamProps;
    team2?: TeamProps;
    drawAmount?: number;
    gameType: string;
}

const SportsBetCard = ({ sportImgSrc, league, date, team1, team2, drawAmount, gameType }: SportsBetCardProps) => {
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const dropdownHeight = 400;
    const [dropdownHeightStyle, setDropdownHeightStyle] = useState('192px');

    const toggleDropDown = () => {
        setDropDownOpen(prev => !prev);
        setDropdownHeightStyle(isDropDownOpen ? '192px' : `${dropdownHeight}px`);
    };

    return (
        <div className='bg-gray-400 w-full rounded-xl p-2 font-semibold text-sm text-white flex flex-col gap-[6px] overflow-hidden' style={{ height: dropdownHeightStyle, transition: 'height 0.3s ease-in-out' }}>
            <div className='flex justify-between items-center text-gray-300'>
                <div className='flex gap-1 items-center'>
                    <div>
                        <Image src={`${sportImgSrc ? `${basePath + sportImgSrc}` : `${basePath}/images/pencil-circle-fill.256x256.png`}`} alt='Sports Icon' width={20} height={20}></Image>
                    </div>
                    <p className='text-nowrap'>{league ? league : 'League Name'}</p>
                </div>
                <div className='flex gap-2'>
                    <button>
                        <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Favorites Icon' width={20} height={20}></Image>
                    </button>
                    <button>
                        <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Favorites Icon' width={20} height={20}></Image>
                    </button>
                </div>
            </div>

            <div className='flex gap-1 items-center'>
                <p>{date ?
                    <>
                        {date}
                    </>
                    :
                    'Month Day, Time 24 hr'
                }</p>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Icon' width={15} height={15}></Image>
            </div>

            <div className='flex gap-3'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={22} height={22}></Image>
                </div>
                <p>{team1 ? team1.teamName : 'Team 1 Name'}</p>
            </div>
            <div className='flex gap-3'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Team Icon' width={22} height={22}></Image>
                </div>
                <p>{team2 ? team2.teamName : 'Team 2 Name'}</p>
            </div>

            <p>{gameType}</p>

            <div className='flex justify-between gap-2 text-xs h-9 w-full shrink-0 mt-1'>
                <button className='bg-gray-600 p-1 w-full h-full flex justify-between items-center rounded-lg'>
                    <p>1</p>
                    <p>1.50</p>
                </button>
                {gameType === '1x2' &&
                    <button className='bg-gray-600 p-1 w-full h-full flex justify-between items-center rounded-lg'>
                        <p>draw</p>
                        <p>{drawAmount}</p>
                    </button>
                }
                <button className='bg-gray-600 p-1 w-full h-full flex justify-between items-center rounded-lg'>
                    <p>2</p>
                    <p>6.20</p>
                </button>
                <button
                    onClick={toggleDropDown}
                    className='bg-gray-600 p-1 w-8 shrink-0 h-full flex justify-between items-center rounded-lg'>
                    {isDropDownOpen ? (
                        <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={40} height={40} />
                    ) : (
                        <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
                    )}
                </button>
            </div>

            <div className='w-full h-1' />

            <SportsBetCardOverButtons />
        </div>
    )
}

export default SportsBetCard;