import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import basePath from '../utilities/basepath'

const ProfileButton = () => {
  return (
    <Link href="/pages/profile" className='w-full h-full'>
      <Image className='relative rounded-lg cursor-pointer' src={`${basePath}/images/temporary-profile-small-image.png`} alt="Player" layout='responsive' width={100} height={100} />
    </Link>
  )
}

export default ProfileButton
