import React from 'react'
import { ReactNode } from 'react'

interface ListContainterWithTitleHeaderProps {
    title: string,
    children: ReactNode,
}

const ListContainterWithTitleHeader = ({title, children}: ListContainterWithTitleHeaderProps) => {
  return (
    <div>
        <div>
            {title}
        </div>
        <div className='px-3'>
            {children}
        </div>
    </div>
  )
}

export default ListContainterWithTitleHeader