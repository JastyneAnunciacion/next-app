import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../../utilities/basepath';

interface FooterButtonProps {
  buttonName: string;
  iconSrc: string;
  iconActiveSrc: string;
  activeTextColor: string;
  pageHref: string;
  active: boolean;
}

const FooterButton = ({ buttonName, iconSrc, iconActiveSrc, activeTextColor, pageHref, active }: FooterButtonProps) => {
  const iconStatus = active ? iconActiveSrc : iconSrc;
  const textColor = active ? activeTextColor : '#00000'
  return (
    <div>
      <Link href={pageHref} className={`${active && 'pointer-events-none'} p-2 flex flex-col items-center`}>
        <div className='flex-shrink-0'>
          <Image src={basePath + iconStatus} alt='Footer Button Image' width={30} height={30}></Image>
        </div>
        <div className='text-[10px]' style={{ color: textColor }}>
          {buttonName}
        </div>
      </Link >
    </div >
  )
}

export default FooterButton