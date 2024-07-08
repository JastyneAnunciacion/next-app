'use client';
import React, { useState } from 'react'
import list from '../temporaryJsons/wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface WalletDropdownProps {
  bitCoinWidthPixel?: number,
  bitCoinHeightPixel?: number,
  dropDownButtonWidthPixel?: number,
  dropDownButtonHeightPixel?: number,
  dropDownArrowWidthPixel?: number,
  dropDownArrowHeightPixel?: number,
  dropDownOffset?: number,
}

const WalletDropdown = ({
  bitCoinWidthPixel = 25,
  bitCoinHeightPixel = 25,
  dropDownButtonWidthPixel = 28,
  dropDownButtonHeightPixel = 28,
  dropDownArrowWidthPixel = 10,
  dropDownArrowHeightPixel = 13,
  dropDownOffset = 0
}: WalletDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);


  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[1px] flex items-center justify-center rounded-lg'>
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full text-white px-[15px] flex items-center justify-between text-lg rounded-lg">
        {selectedWallet && (
          <div className='flex items-center gap-[11px]'>
            <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={bitCoinWidthPixel} height={bitCoinHeightPixel}></Image>
            <h3>{selectedWallet.Amount}</h3>
          </div>
        )}

        {!isOpen ?
          <div
            style={{ width: `${dropDownButtonWidthPixel}px`, height: `${dropDownButtonHeightPixel}px` }}
            className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] h-7 w-7 rounded-lg items-center justify-center flex'
          >
            <Image src={`${basePath}/images/down-thin-arrow-image.png`} alt="Down Arrow" width={dropDownArrowWidthPixel} height={dropDownArrowHeightPixel} />
          </div>
          :
          <div
            style={{ width: `${dropDownButtonWidthPixel}px`, height: `${dropDownButtonHeightPixel}px` }}
            className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] h-7 w-7 rounded-lg items-center justify-center flex'
          >
            <Image src={`${basePath}/images/up-thin-arrow-image.png`} alt="Up Arrow" width={dropDownArrowWidthPixel} height={dropDownArrowHeightPixel} />
          </div>
        }

        {isOpen && (
          <div className="bg-gray-800 w-full absolute left-0 bottom-0 z-20" style={{ transform: `translateY(calc(100% + ${dropDownOffset}px))` }}>
            <div className="flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
              {list.map((item, i) => (
                <button onClick={() => {
                  setCurrentlySelected(i);
                  setIsOpen(false);
                }} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center' key={i}>
                  <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={20} height={20}></Image>
                  <h3>{item.Amount}</h3>
                </button>
              ))}
            </div>
          </div>
        )}
      </button>
    </div>
  )
}

export default WalletDropdown