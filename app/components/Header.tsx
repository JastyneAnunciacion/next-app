import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './dropdowns/WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header className='w-full max-w-[95.46%]'>
      <div className='my-[23px] flex items-center w-full max-w-full justify-center gap-2'>
        <Link href="/" className='flex-shrink-0'>
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={45} height={44} />
        </Link>
        <div className='w-[193px] h-[49px]'>
          <WalletDropdown />
        </div>
        <Link href="/wallet" className='w-[49px] h-[49px] bg-[#241a46] rounded-xl flex items-center justify-center text-5xl font-thin text-violet-600 pb-[8px]'>+</Link>
        <div className='w-[49px] h-[49px] bg-[#241a46] rounded-xl flex items-center justify-center text-3xl font-bold pb-[4px]'>
          <Image className='rounded-full' src={`${basePath}/images/purple-question-image.png`} alt="Question Logo" width={25} height={25} />
        </div>
        <ProfileButton />
      </div>
    </header>
  )
}

export default Header