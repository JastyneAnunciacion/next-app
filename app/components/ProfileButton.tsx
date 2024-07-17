import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import basePath from '../utilities/basepath'

const ProfileButton = () => {
  return (
    <div>
      <Link href="/pages/profile">
        <Image className='relative rounded-lg cursor-pointer' src={`${basePath}/images/temporary-profile-small-image.png`} alt="Player" width={49} height={49}></Image>
      </Link>
    </div>
  )
}

export default ProfileButton
