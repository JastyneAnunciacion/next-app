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
        <div className={`fixed z-40 overflow-y-auto top-0 w-full h-full bg-[#201434] font-normal transition-all duration-700 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-full flex justify-center self-center mb-[0.67vh]'>
                <Header />
            </div>
            <div className='flex justify-center px-[4.16vw] flex-col gap-[2.43vh] mb-40'>
                <div className='h-[6.75vh]'>
                    <Serachbar placeholderText='Find a Game' />
                </div>
                <div className='flex flex-col gap-[1.61vh]'>
                    <ListContainterWithTitleHeader title='Games'>
                        <ListItem imgSrc={`${basePath}/images/games-selected-image.png`} linkHref='/pages/games' itemName='Casino' textHexColor='#D187FF' />
                        <ListItem imgSrc={`${basePath}/images/sports-selected-image.png`} linkHref='/pages/sports' itemName='Sports' textHexColor='#FFF387' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='More'>
                        <ListItem imgSrc={`${basePath}/images/rewards-selected-image.png`} linkHref='/pages/rewards' itemName='Rewards' textHexColor='#87FFD4' />
                        <ListItem imgSrc={`${basePath}/images/promotion-selected-image.png`} linkHref='/pages/promotions' itemName='Promotions' textHexColor='#878CFF' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='User' hasBorderBottom={false}>
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
