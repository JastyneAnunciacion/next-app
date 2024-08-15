'use client'

import React, { useState } from 'react'
import list from '../temporaryJsons/wallet-list.json'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import Toggle from '../Toggle'

interface WalletDropdownProps {
  paddingLeft?: string
  paddingRight?: string
  arrowBoxSize?: string
}


const WalletDropdown = ({ paddingLeft = '2.92vw', arrowBoxSize = '6.25vw', paddingRight = '3.13vw' }: WalletDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false);
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative bg-gradient-to-r from-[#A379DF] to-[#221C42]/0 w-full h-full p-[0.21vw] flex items-center justify-center rounded-2xl'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
        className={`relative bg-gradient-to-r from-[#412A78] to-[#221C42] w-full h-full text-white flex items-center justify-between rounded-2xl`}
      >
        {selectedWallet && (
          <div className='absolute flex h-full w-full items-center gap-[2.29vw]'>
            <div className='w-[6.25vw] aspect-square'>
              <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
            </div>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap w-full text-[4.16vw] font-manrope text-left'>
              {selectedWallet.Amount}
            </p>
          </div>
        )}

        <div
          style={{ width: arrowBoxSize }}
          className='flex-shrink-0 ml-auto bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] aspect-square rounded-2xl items-center justify-center flex'
        >
          <div className='w-[33.33%] aspect-[10/13]'>
            <Image src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`} alt="Arrows" layout='responsive' width={100} height={100} />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className='absolute bg-[#1A1E27] w-full left-0 bottom-0 flex flex-col overflow-hidden z-20 rounded-xl'>
          <div className="h-[260px] overflow-y-auto z-10 text-white border-b border-[#252A35]">
            {list.map((item, i) => (
              <button onClick={(() => handleItemClick(i))} className='flex gap-2 w-full px-4 hover:bg-[#272d3a] cursor-pointer items-center justify-between' key={i}>
                <h3>{item.Amount}</h3>
                <div className='flex items-center gap-2'>
                  <h3 className='text-left'>{item.Token}</h3>
                  <div className='shrink-0'>
                    <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={20} height={20} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className='py-[20px] px-3 flex flex-col justify-center'>
            <div className='text-white text-sm flex justify-between'>
              <p>Hide 0 balances</p>
              <Toggle bgIsDark={true} />
            </div>
            <div className='text-white text-sm flex justify-between'>
              <p>Display in USD</p>
              <Toggle bgIsDark={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WalletDropdown