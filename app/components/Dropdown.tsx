'useClient'

import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';

interface dropdownProps {
    title: string,
    children: ReactNode;
}

const Dropdown = ({title, children}: dropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
        <button className='flex items-center font-bold gap-2' onClick={() => setIsOpen((prev) => !prev)} >
            {!isOpen ? (
              "▶ "
            ) : (
              "▼ "
            )}
            <p>{title}</p>
        </button>
        {isOpen && (
            <div className='absolute top-6 pl-5 font-normal'>
                <ul>
                    {children}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Dropdown