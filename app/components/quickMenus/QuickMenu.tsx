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
      <div className='h-40' />
      <div className='w-full pointer-events-none' />
      <div className='flex items-center justify-center'>
        <div className={`${isMenuExpanded ? 'w-[72px] duration-500 z-50' : 'w-full duration-700'} flex justify-center items-center max-w-[83.96%] bg-[#1F2937] min-h-[60px] h-[8.98%] max-h-[72px] fixed rounded-full bottom-[52px] z-20 transition-all`}>
          <div className={`${isMenuExpanded ? 'justify-center' : 'justify-between'} flex items-center w-full max-w-[85.29%]`}>
            <button className={`${isMenuExpanded && 'w-full'} p-2 flex flex-col items-center justify-center`} onClick={toggleMenu}>
              {isMenuExpanded ?
                <div>
                  <div className='text-[10px]'>
                    <p className='font-bold text-[20px] text-[#FF8787]'>X</p>
                  </div>
                </div>
                :
                <div>
                  <div className='shrink-0 flex flex-col gap-1 items-center'>
                    <Image
                      src={basePath + '/images/menu-image.png'}
                      alt='Footer Button Image'
                      width={22}
                      height={22}
                    />
                    <div className='text-[10px]'>
                      <p>Menu</p>
                    </div>
                  </div>
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
      <div className='fixed bg-gradient-to-t from-[#242037] from-20% via-[#1F1648]/9 via-78% to-[#D9D9D9]/0 w-full h-36 bottom-0 z-0 pointer-events-none' />
    </div>
  );
};

export default QuickMenu;
