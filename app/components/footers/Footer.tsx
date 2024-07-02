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
        <div className='px-[34px] py-[14px] flex justify-between items-center bg-[#1F2937] h-[72px] fixed w-[335px] rounded-full bottom-[52px] z-10'>
          <FooterButton
            iconSrc='/images/menu-image.png'
            iconActiveSrc='/images/menu-selected-image.png'
            activeTextColor="#FF8787"
            pageHref='/menu'
            buttonName='Menu'
            active={currentPage === "Menu"}
          />
          <FooterButton
            iconSrc='/images/games-image.png'
            iconActiveSrc='/images/games-selected-image.png'
            activeTextColor="#D187FF"
            pageHref='/'
            buttonName='Games'
            active={currentPage === "Casino"}
          />
          <FooterButton
            iconSrc='/images/rewards-image.png'
            iconActiveSrc='/images/rewards-selected-image.png'
            activeTextColor="#87FFD4"
            pageHref='/earn'
            buttonName='Rewards'
            active={currentPage === "Earn"}
          />
          <FooterButton
            iconSrc='/images/wallet-image.png'
            iconActiveSrc='/images/wallet-selected-image.png'
            activeTextColor="#9FFF87"
            pageHref='/wallet'
            buttonName='Wallet'
            active={currentPage === "Wallet"}
          />
          <FooterButton
            iconSrc='/images/profile-image.png'
            iconActiveSrc='/images/profile-selected-image.png'
            activeTextColor="#87C5FF"
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