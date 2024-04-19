import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderProfileButton = () => {
  return (
    <div>
      <Link href="/profile">
        <Image className='relative rounded-full cursor-pointer' src="/images/blank-account-icon.png" alt="Player" width={40} height={40}></Image>
      </Link>
    </div>
  )
}

export default HeaderProfileButton
