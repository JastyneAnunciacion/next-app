import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header>
      <div className='p-2 flex items-center bg-black'>
        <Link href="/">
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={45} height={45} />
        </Link>
        <div className='flex ml-auto gap-2'>
          <div className='w-40'>
            <WalletDropdown />
          </div>
          <Link href="/wallet" className='w-10 h-10 bg-gray-900 rounded-xl text-white flex items-center justify-center text-3xl font-bold pb-[4px]'>+</Link>
          <div className='w-10 h-10 bg-gray-900 rounded-xl text-white flex items-center justify-center text-3xl font-bold pb-[4px]'>
            {/* <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={45} height={45} /> */}
            <div className='h-7 w-7 bg-gray-300 rounded-full' />
          </div>
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}

export default Header