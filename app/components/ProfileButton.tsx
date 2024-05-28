import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import basePath from '../utilities/basepath'

const ProfileButton = () => {
  return (
    <div>
      <Link href="/earn">
        <Image className='relative rounded-full cursor-pointer border' src={`${basePath}/images/profile-image.jpg`} alt="Player" width={40} height={40}></Image>
      </Link>
    </div>
  )
}

export default ProfileButton
