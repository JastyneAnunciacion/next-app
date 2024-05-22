import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../utilities/basepath';

interface FooterButtonProps {
  buttonName: string;
  iconSrc: string;
  pageHref: string;
  active: boolean;
}

const FooterButton = ({ buttonName, iconSrc, pageHref, active }: FooterButtonProps) => {
  return (
    <div>
      {active ? (
        <div className={`relative p-3 text-sm flex flex-col items-center bg-gray-900 rounded-full`}>
          <div>
            <Image src={basePath + iconSrc} alt='Footer Button Image' width={30} height={30}></Image>
          </div>
          <div className='absolute top-16 font-bold text-xs'>
            {buttonName}
          </div>
        </div>
      ) : (
        <Link href={pageHref} className={`relative p-3 text-sm flex flex-col items-center`}>
          <div>
            <Image src={basePath + iconSrc} alt='Footer Button Image' width={30} height={30}></Image>
          </div>
          <div className='absolute top-16 font-bold text-xs'>
            {buttonName}
          </div>
        </Link>
      )}
    </div>
  )
}

export default FooterButton