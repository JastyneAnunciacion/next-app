import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import basePath from '../utilities/basepath'

const ProfileButton = () => {
  return (
    <div>
      <Link href="/profile">
        <Image className='relative rounded-full cursor-pointer' src={`${basePath}/images/blank-account-icon.png`} alt="Player" width={40} height={40}></Image>
      </Link>
    </div>
  )
}

export default ProfileButton
