'use client'

import FooterButton from './FooterButton'

interface FooterProps {
    currentPage?: string;
}

const Footer = ({currentPage=""}: FooterProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='p-2 flex justify-center items-center bg-gray-800 h-16 fixed w-2/3 rounded-full bottom-4 gap-4 sm:gap-16 md:gap-24 lg:gap-44'>
          <FooterButton iconSrc='/images/menu-image.png' pageHref='/menu' active={currentPage === "Menu"}>Menu</FooterButton>
          <FooterButton iconSrc='/images/home-image.png' pageHref='/' active={currentPage === "Home"}>Home</FooterButton>
          <FooterButton iconSrc='/images/casino-image.png' pageHref='/casino' active={currentPage === "Casino"}>Casino</FooterButton>
          <FooterButton iconSrc='/images/sports-image.png' pageHref='/sports' active={currentPage === "Sports"}>Sports</FooterButton>
          <FooterButton iconSrc='/images/wallet-image.png' pageHref='/wallet' active={currentPage === "Wallet"}>Wallet</FooterButton>
      </div>
    </div>
  )}

export default Footer