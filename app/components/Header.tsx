import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './WalletDropdown';
import HeaderProfileButton from './HeaderProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header>
        <div className='p-2 flex items-center bg-gray-700'>
            <Link href="/">
                <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.jpeg`} alt="Header Main Logo" width={40} height={40} />
            </Link>
            <div className='flex ml-auto'>
              <div className='pr-4 w-52'>
                <WalletDropdown />
              </div>
              <HeaderProfileButton />
            </div>
        </div>
    </header>
  )
}

export default Header