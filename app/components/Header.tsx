import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './dropdowns/WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header className='w-full h-full flex items-center'>
      <div className='py-[12px] px-[2.27%] flex items-center w-full max-w-full h-full justify-center gap-[2.08vw]'>
        <Link href="/" className='w-[9.17vw] h-[9.37vw]'>
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" layout='responsive' width={100} height={100} />
        </Link>
        <div className='w-[40.21vw] h-[10.21vw] shrink-0'>
          <WalletDropdown bitCoinHeightPixel={30} bitCoinWidthPixel={30} />
        </div>
        <Link href='/pages/wallet' className='w-[10.21vw] h-[10.21vw] shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
          <Image className='rounded-full' src={`${basePath}/images/plus-purple-image.png`} alt="Header Main Logo" width={25} height={25} />
        </Link>
        <div className='w-[10.21vw] h-[10.21vw] shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
          <Image className='rounded-full' src={`${basePath}/images/purple-question-image.png`} alt="Question Logo" width={25} height={25} />
        </div>
        <div className='w-[10.21vw] h-[10.21vw] flex items-center shrink-0'>
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}

export default Header