'use client'

import React from 'react'
import Image from 'next/image'

interface ListItemProps {
    imgSrc?: string,
    itemName: string
}

const ListItem = ({imgSrc="", itemName}: ListItemProps) => {
  return (
    <button className='w-full h-8 flex gap-2 px-3 items-center'>
        <Image src={imgSrc} alt='list item' width={20} height={20} />
        <p>{itemName}</p>
    </button>
  )
}

export default ListItem