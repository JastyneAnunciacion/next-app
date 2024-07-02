import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../../utilities/basepath';

interface FooterButtonProps {
  buttonName: string;
  iconSrc: string;
  iconActiveSrc: string;
  pageHref: string;
  active: boolean;
}

const FooterButton = ({ buttonName, iconSrc, iconActiveSrc, pageHref, active }: FooterButtonProps) => {
  const iconStatus = active ? iconActiveSrc : iconSrc;
  return (
    <div>
      <Link href={pageHref} className={`${active && 'border rounded-full pointer-events-none'} p-2 flex flex-col items-center gap-1`}>
        <div className='flex-shrink-0'>
          <Image src={basePath + iconStatus} alt='Footer Button Image' width={30} height={30}></Image>
        </div>
        <div className='text-xs'>
          {buttonName}
        </div>
      </Link>
    </div>
  )
}

export default FooterButton