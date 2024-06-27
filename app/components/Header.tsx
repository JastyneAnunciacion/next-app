import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './dropdowns/WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header>
      <div className='p-2 pt-4 flex items-center justify-center gap-2'>
        <Link href="/">
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={50} height={50} />
        </Link>
        <div className='w-48'>
          <WalletDropdown />
        </div>
        <Link href="/wallet" className='w-11 h-11 bg-[#241a46] rounded-xl flex items-center justify-center text-5xl font-thin text-violet-600 pb-[8px]'>+</Link>
        <div className='w-11 h-11 bg-[#241a46] rounded-xl flex items-center justify-center text-3xl font-bold pb-[4px]'>
          <Image className='rounded-full' src={`${basePath}/images/question-image.png`} alt="Question Logo" width={24} height={24} />
        </div>
        <ProfileButton />
      </div>
    </header>
  )
}

export default Header