import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './dropdowns/WalletDropdown';
import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header className='w-full h-full flex items-center'>
      <div className='py-[12px] px-[2.27%] flex items-center w-full aspect-[441/74] justify-center gap-[2.08vw]'>
        <Link href="/" className='w-[9.17vw] aspect-square shrink-0'>
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" layout='responsive' width={100} height={100} />
        </Link>
        <div className='w-[40.21vw] aspect-[193/49] shrink-0'>
          <WalletDropdown />
        </div>
        <Link href='/pages/wallet' className='w-[10.21vw] aspect-square shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
          <div className='w-[51.02%] aspect-square'>
            <Image className='rounded-full' src={`${basePath}/images/plus-purple-image.png`} alt="Plus Icon" layout='responsive' width={100} height={100} />
          </div>
        </Link>
        <div className='w-[10.21vw] aspect-square shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
          <div className='w-[51.02%] aspect-square'>
            <Image className='rounded-full' src={`${basePath}/images/purple-question-image.png`} alt="Question Icon" layout='responsive' width={100} height={100} />
          </div>
        </div>
        <div className='w-[10.21vw] aspect-square flex items-center shrink-0'>
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}

export default Header