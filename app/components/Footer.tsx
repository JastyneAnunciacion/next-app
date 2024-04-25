'use client'

import FooterButton from './FooterButton'

interface FooterProps {
    currentPage?: string;
}

const Footer = ({currentPage=""}: FooterProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='p-4 flex justify-between items-center bg-gray-800 h-16 fixed w-2/3 rounded-full bottom-8 '>
          <FooterButton iconSrc='/images/menu-image.png' pageHref='/menu' buttonName='Menu' active={currentPage === "Menu"} />
          <FooterButton iconSrc='/images/casino-image.png' pageHref='/' buttonName='Casino' active={currentPage === "Casino"} />
          <FooterButton iconSrc='/images/sports-image.png' pageHref='/sports' buttonName='Sports' active={currentPage === "Sports"} />
          <FooterButton iconSrc='/images/earn-image.png' pageHref='/earn' buttonName='Earn' active={currentPage === "Earn"} />
          <FooterButton iconSrc='/images/wallet-image.png' pageHref='/wallet' buttonName='Wallet' active={currentPage === "Wallet"} />
      </div>
    </div>
  )}

export default Footer