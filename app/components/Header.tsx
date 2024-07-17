import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './dropdowns/WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header className='w-full h-full flex items-center'>
      <div className='py-[12px] px-[2.27%] flex items-center w-full max-w-full h-full justify-center gap-[2.04%]'>
        <Link href="/" className='flex-shrink-0'>
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={45} height={44} />
        </Link>
        <div className='w-[43.76%] h-[49px] responsive-text'>
          <WalletDropdown bitCoinHeightPixel={30} bitCoinWidthPixel={30} />
        </div>
        <Link href='/pages/wallet' className='w-[49px] h-[49px] bg-[#241a46] rounded-xl flex items-center justify-center'>
          <Image className='rounded-full' src={`${basePath}/images/plus-purple-image.png`} alt="Header Main Logo" width={25} height={25} />
        </Link>
        <div className='w-[49px] h-[49px] bg-[#241a46] rounded-xl flex items-center justify-center text-3xl font-bold'>
          <Image className='rounded-full' src={`${basePath}/images/purple-question-image.png`} alt="Question Logo" width={25} height={25} />
        </div>
        <ProfileButton />
      </div>
    </header>
  )
}

export default Header