'use client'

import Serachbar from './Serachbar';
import ListContainterWithTitleHeader from './lists/ListContainterWithTitleHeader';
import ListItem from './lists/ListItem';
import basePath from '../utilities/basepath';
import Header from './Header';

interface FullMenuProps {
    isExpanded: boolean;
}

const FullMenu = ({ isExpanded }: FullMenuProps) => {
    return (
        <div className={`fixed z-40 overflow-y-auto top-0 w-full h-full bg-[#201434] transition-all duration-700 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-center px-3 pt-3 flex-col gap-[18px] mb-40'>
                <Header />
                <div className='h-10'>
                    <Serachbar placeholderText='Find a Game' />
                </div>
                <div className='flex flex-col gap-2'>
                    <ListContainterWithTitleHeader title='GAMES'>
                        <ListItem imgSrc={`${basePath}/images/games-selected-image.png`} linkHref='/pages/games' itemName='Casino' textHexColor='#D187FF' />
                        <ListItem imgSrc={`${basePath}/images/sports-selected-image.png`} linkHref='/pages/sports' itemName='Sports' textHexColor='#FFF387' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='MORE'>
                        <ListItem imgSrc={`${basePath}/images/rewards-selected-image.png`} linkHref='/pages/rewards' itemName='Rewards' textHexColor='#87FFD4' />
                        <ListItem imgSrc={`${basePath}/images/promotion-selected-image.png`} linkHref='/pages/promotions' itemName='Promotions' textHexColor='#878CFF' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='USER'>
                        <ListItem imgSrc={`${basePath}/images/profile-selected-image.png`} linkHref='/pages/profile' itemName='Profile' textHexColor='#87C5FF' />
                        <ListItem imgSrc={`${basePath}/images/wallet-selected-image.png`} linkHref='/pages/wallet' itemName='Wallet' textHexColor='#9FFF87' />
                        <ListItem imgSrc={`${basePath}/images/orange-cog-image.png`} linkHref='/pages/settings' itemName='Settings' textHexColor='#FFA487' />
                    </ListContainterWithTitleHeader>
                </div>
            </div>
        </div>
    );
};

export default FullMenu;
