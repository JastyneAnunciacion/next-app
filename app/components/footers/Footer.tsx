'use client'

import FooterButton from "./FooterButton";



interface FooterProps {
  currentPage?: string;
}

const Footer = ({ currentPage = "" }: FooterProps) => {
  return (
    <div>
      <div className='w-full pointer-events-none' />
      <div className='flex items-center justify-center'>
        <div className='p-4 flex justify-between items-center bg-gray-800 h-16 fixed w-[75%] rounded-full bottom-8 z-10'>
          <FooterButton
            iconSrc='/images/menu-image.png'
            iconActiveSrc='/images/menu-selected-image.png'
            pageHref='/menu'
            buttonName='Menu'
            active={currentPage === "Menu"}
          />
          <FooterButton
            iconSrc='/images/casino-image.png'
            iconActiveSrc='/images/casino-selected-image.png'
            pageHref='/'
            buttonName='Games'
            active={currentPage === "Casino"}
          />
          <FooterButton
            iconSrc='/images/rewards-image.png'
            iconActiveSrc='/images/rewards-selected-image.png'
            pageHref='/earn'
            buttonName='Rewards'
            active={currentPage === "Earn"}
          />
          <FooterButton
            iconSrc='/images/wallet-image.png'
            iconActiveSrc='/images/wallet-selected-image.png'
            pageHref='/wallet'
            buttonName='Wallet'
            active={currentPage === "Wallet"}
          />
          <FooterButton
            iconSrc='/images/profile-image.png'
            iconActiveSrc='/images/profile-selected-image.png'
            pageHref='/profile'
            buttonName='Profile'
            active={currentPage === "Profile"} />
        </div>
      </div>
      <div className='fixed bg-gradient-to-t from-gray-900/100 to-gray-200/0 w-full h-36 bottom-0 z-0 pointer-events-none' />
    </div>
  )
}

export default Footer