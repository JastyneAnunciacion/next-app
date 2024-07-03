'use client'

import React, { useState } from 'react';
import basePath from '@/app/utilities/basepath';
import FooterButton from './FooterButton';
import Image from 'next/image';
import FullMenu from '../FullMenu';

interface FooterProps {
  currentPage?: string;
}

const Footer = ({ currentPage = '' }: FooterProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div>
      <div className='w-full pointer-events-none' />
      <div className='flex items-center justify-center'>
        <div className={`${isMenuExpanded ? 'px-[34px] w-[403px] justify-between' : 'w-[72px] justify-center'} py-[14px] flex items-center bg-[#1F2937] h-[72px] fixed rounded-full bottom-[52px] z-20 transition-all duration-300`}>
          <button className={`${!isMenuExpanded && 'w-full'} p-2 flex flex-col items-center justify-center`} onClick={toggleMenu}>
            {isMenuExpanded ?
              <div>
                <div className='flex-shrink-0'>
                  <Image
                    src={basePath + '/images/menu-image.png'}
                    alt='Footer Button Image'
                    width={30}
                    height={30}
                  />
                  <div className='text-[10px]'>
                    <p>Menu</p>
                  </div>
                </div>
              </div>
              :
              <div>
                <div className='text-[10px]'>
                  <p className='font-bold text-[25px] text-[#FF8787]'>X</p>
                </div>
              </div>
            }
          </button>

          {isMenuExpanded &&
            <>
              <FooterButton
                iconSrc='/images/games-image.png'
                iconActiveSrc='/images/games-selected-image.png'
                activeTextColor='#D187FF'
                pageHref='/'
                buttonName='Games'
                active={currentPage === 'Casino'}
              />
              <FooterButton
                iconSrc='/images/sports-image.png'
                iconActiveSrc='/images/sports-selected-image.png'
                activeTextColor='#D187FF'
                pageHref='/sports'
                buttonName='Games'
                active={currentPage === 'Sports'}
              />
              <FooterButton
                iconSrc='/images/rewards-image.png'
                iconActiveSrc='/images/rewards-selected-image.png'
                activeTextColor='#87FFD4'
                pageHref='/earn'
                buttonName='Rewards'
                active={currentPage === 'Earn'}
              />
              <FooterButton
                iconSrc='/images/wallet-image.png'
                iconActiveSrc='/images/wallet-selected-image.png'
                activeTextColor='#9FFF87'
                pageHref='/wallet'
                buttonName='Wallet'
                active={currentPage === 'Wallet'}
              />
              <FooterButton
                iconSrc='/images/profile-image.png'
                iconActiveSrc='/images/profile-selected-image.png'
                activeTextColor='#87C5FF'
                pageHref='/profile'
                buttonName='Profile'
                active={currentPage === 'Profile'}
              />
            </>
          }
        </div>
        <FullMenu isExpanded={!isMenuExpanded} />
      </div>
      <div className='fixed bg-gradient-to-t from-gray-900/100 to-gray-200/0 w-full h-36 bottom-0 z-0 pointer-events-none' />
    </div>
  );
};

export default Footer;
