'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ListItemProps {
  imgSrc?: string,
  itemName: string,
  linkHref?: string,
  textHexColor?: string,
  onClick?: () => void
}

const ListItem = ({ imgSrc = "", itemName, linkHref = "", onClick = () => { }, textHexColor }: ListItemProps) => {
  const textColor = textHexColor ? textHexColor : '#00000'
  return (
    <Link href={linkHref}>
      <button onClick={onClick} className='text-[16px] w-full h-9 flex gap-2 px-3 items-center'>
        {imgSrc && (
          <Image src={imgSrc} alt='List Item' width={22} height={22} />
        )}
        <p style={{ color: textColor }}>{itemName}</p>
      </button>
    </Link>
  )
}

export default ListItem