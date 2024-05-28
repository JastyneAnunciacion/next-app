'use client'

import FooterButton from './FooterButton'

interface FooterProps {
  currentPage?: string;
}

const Footer = ({ currentPage = "" }: FooterProps) => {
  return (
    <div>
      <div className='w-full pointer-events-none h-32' />
      <div className='flex items-center justify-center'>
        <div className='p-4 flex justify-between items-center bg-gray-800 h-16 fixed w-[75%] rounded-full bottom-8 z-10'>
          <FooterButton iconSrc='/images/casino-image.png' pageHref='/' buttonName='Games' active={currentPage === "Casino"} />
          <FooterButton iconSrc='/images/sports-image.png' pageHref='/sports' buttonName='Sports' active={currentPage === "Sports"} />
          <FooterButton iconSrc='/images/earn-image.png' pageHref='/earn' buttonName='Ranking' active={currentPage === "Earn"} />
          <FooterButton iconSrc='/images/wallet-image.png' pageHref='/wallet' buttonName='Wallet' active={currentPage === "Wallet"} />
          <FooterButton iconSrc='/images/profile-image.png' pageHref='/profile' buttonName='Profile' active={currentPage === "Profile"} />
          <FooterButton iconSrc='/images/menu-image.png' pageHref='/menu' buttonName='Menu' active={currentPage === "Menu"} />
        </div>
      </div>
      <div className='fixed bg-gradient-to-t from-gray-900/100 to-gray-200/0 w-full h-36 bottom-0 z-0 pointer-events-none' />
    </div>
  )
}

export default Footer