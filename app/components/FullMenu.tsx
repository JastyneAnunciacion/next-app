'use client'

import React, { useState } from 'react';
import Serachbar from './Serachbar';
import SmallBanner from './banners/SmallBanner';
import ListContainterWithTitleHeader from './lists/ListContainterWithTitleHeader';
import DropdownListItem from './dropdowns/DropdownListItem';
import ListItem from './lists/ListItem';
import basePath from '../utilities/basepath';
import Header from './Header';
import SmallIcon from './SmallIcon';

interface FullMenuProps {
    isExpanded: boolean;
}

const FullMenu = ({ isExpanded }: FullMenuProps) => {
    return (
        <div className={`fixed overflow-y-auto top-0 w-full h-full bg-[#201434] transition-all duration-700 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-center px-3 pt-3 flex-col gap-[18px] mb-40'>
                <Header />
                <div className='h-10'>
                    <Serachbar placeholderText='Find a Game' />
                </div>
                <SmallBanner>
                    <div className='flex gap-3 items-center'>
                        <SmallIcon circleWidthPixel={52} circleHeightPixel={52} iconSrc='sports-notification-image' iconWidthPixel={34} iconHeightPixel={34} />
                        <div className='text-white flex flex-col gap-2 text-sm'>
                            <p className='w-3/5 text-nowrap text-[20px]'>Sports News</p>
                            <p className='text-[#b575e1] text-[16px]'>Best Bets</p>
                        </div>
                    </div>
                </SmallBanner>
                <div className='flex flex-col gap-2'>
                    <ListContainterWithTitleHeader title='GAMES'>
                        <ListItem imgSrc={`${basePath}/images/games-selected-image.png`} linkHref='/games' itemName='Casino' textHexColor='#D187FF' />
                        <ListItem imgSrc={`${basePath}/images/sports-selected-image.png`} linkHref='/sports' itemName='Sports' textHexColor='#FFF387' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='MORE'>
                        <ListItem imgSrc={`${basePath}/images/rewards-selected-image.png`} linkHref='/earn' itemName='Rewards' textHexColor='#87FFD4' />
                        <ListItem imgSrc={`${basePath}/images/promotion-selected-image.png`} linkHref='/promotions' itemName='Promotions' textHexColor='#878CFF' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='USER'>
                        <ListItem imgSrc={`${basePath}/images/profile-selected-image.png`} linkHref='/profile' itemName='Profile' textHexColor='#87C5FF' />
                        <ListItem imgSrc={`${basePath}/images/wallet-selected-image.png`} linkHref='/wallet' itemName='Wallet' textHexColor='#9FFF87' />
                        <ListItem imgSrc={`${basePath}/images/orange-cog-image.png`} linkHref='/settings' itemName='Settings' textHexColor='#FFA487' />
                    </ListContainterWithTitleHeader>
                </div>
            </div>
        </div>
    );
};

export default FullMenu;
