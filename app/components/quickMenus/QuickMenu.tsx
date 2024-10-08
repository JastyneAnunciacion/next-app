'use client'

import React, { useState } from 'react';
import basePath from '@/app/utilities/basepath';
import QuickMenuButton from './QuickMenuButton';
import Image from 'next/image';
import FullMenu from '../FullMenu';

interface QuickMenuProps {
  currentPage?: string;
  onExpand?: (bool: boolean) => void;
}

const QuickMenu = ({ currentPage = '', onExpand }: QuickMenuProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    const toggleBool = !isMenuExpanded;
    setIsMenuExpanded(toggleBool);
    if (onExpand) {
      onExpand(toggleBool);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center font-manrope font-bold text-[2.08vw]'>
        <div className={`${isMenuExpanded ? 'w-[13%] aspect-square duration-500' : 'w-full aspect-[403/72] duration-700'} flex justify-center items-center max-w-[83.95%] bg-[#1F2937] fixed rounded-full bottom-[10.83vw] z-50 transition-all`}>
          <div className={`${isMenuExpanded ? 'justify-center' : 'justify-between'} flex items-center w-full px-[6.97vw]`}>
            <button className={`${isMenuExpanded && 'w-full'} flex flex-col items-center justify-center`} onClick={toggleMenu}>
              {isMenuExpanded ?
                <div>
                  <div>
                    <p className='text-[4.16vw] text-[#FF8787]'>X</p>
                  </div>
                </div>
                :
                <div className='flex flex-col gap-[0.83vw] items-center'>
                  <div className='w-[4.58vw] aspect-square'>
                    <Image
                      src={basePath + '/images/menu-image.png'}
                      alt='Footer Button Image'
                      layout='responsive'
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>Menu</p>
                </div>
              }
            </button>

            {!isMenuExpanded &&
              <>
                <QuickMenuButton
                  iconSrc='/images/games-image.png'
                  iconActiveSrc='/images/games-selected-image.png'
                  activeTextColor='#D187FF'
                  pageHref='/'
                  buttonName='Games'
                  active={currentPage === 'Games'}
                />
                <QuickMenuButton
                  iconSrc='/images/sports-image.png'
                  iconActiveSrc='/images/sports-selected-image.png'
                  activeTextColor='#FFF387'
                  pageHref='/pages/sports'
                  buttonName='Sports'
                  active={currentPage === 'Sports'}
                />
                <QuickMenuButton
                  iconSrc='/images/rewards-image.png'
                  iconActiveSrc='/images/rewards-selected-image.png'
                  activeTextColor='#87FFD4'
                  pageHref='/pages/rewards'
                  buttonName='Rewards'
                  active={currentPage === 'Rewards'}
                />
                <QuickMenuButton
                  iconSrc='/images/wallet-image.png'
                  iconActiveSrc='/images/wallet-selected-image.png'
                  activeTextColor='#9FFF87'
                  pageHref='/pages/wallet'
                  buttonName='Wallet'
                  active={currentPage === 'Wallet'}
                />
                <QuickMenuButton
                  iconSrc='/images/profile-image.png'
                  iconActiveSrc='/images/profile-selected-image.png'
                  activeTextColor='#87C5FF'
                  pageHref='/pages/profile'
                  buttonName='Profile'
                  active={currentPage === 'Profile'}
                />
              </>
            }
          </div>
        </div>
        <FullMenu isExpanded={isMenuExpanded} />
      </div>
      <div className='fixed bg-gradient-to-t from-[#242037] via-[#1F1648]/9 via-78% to-[#D9D9D9]/0 w-full h-[39.16vw] bottom-0 z-0 pointer-events-none' />
      <div className='h-[42.29vw] bottom-0 z-0 pointer-events-none' />
    </div>
  );
};

export default QuickMenu;
