'use client';
import React, { useState } from 'react'
import list from '../temporaryJsons/wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';
import Toggle from '../Toggle';

interface WalletDropdownProps {
  bitCoinWidthPixel?: number,
  bitCoinHeightPixel?: number,
  dropDownButtonWidthPixel?: number,
  dropDownButtonHeightPixel?: number,
  dropDownArrowWidthPixel?: number,
  dropDownArrowHeightPixel?: number,
  dropDownOffset?: number,
  customPaddingX?: number,
  customTokenAndAmountGap?: number
}

const WalletDropdown = ({
  bitCoinWidthPixel = 25,
  bitCoinHeightPixel = 25,
  dropDownButtonWidthPixel = 28,
  dropDownButtonHeightPixel = 28,
  dropDownArrowWidthPixel = 10,
  dropDownArrowHeightPixel = 13,
  dropDownOffset = 0,
  customPaddingX = 7.77,
}: WalletDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false);
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[1px] flex items-center justify-center rounded-lg'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ paddingLeft: customPaddingX + '%', paddingRight: customPaddingX + '%' }}
        className={`bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full text-white flex items-center justify-between rounded-lg`}
      >
        {selectedWallet && (
          <div className='flex h-full w-full items-center gap-[11px] pr-[10.88%]'>
            <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={bitCoinWidthPixel} height={bitCoinHeightPixel}></Image>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap w-full text-left' style={{ fontSize: 'clamp(12px, 3vw, 20px)' }}>
              {selectedWallet.Amount}
            </p>
          </div>
        )}

        <div
          style={{ width: `${dropDownButtonWidthPixel}px`, height: `${dropDownButtonHeightPixel}px` }}
          className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] h-[61.22%] w-7 rounded-lg items-center justify-center flex'
        >
          <Image src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`} alt="Arrows" width={dropDownArrowWidthPixel} height={dropDownArrowHeightPixel} />
        </div>
      </button>

      {isOpen && (
        <div
          style={{ transform: `translateY(calc(100% + ${dropDownOffset}px))` }}
          className='absolute bg-[#1A1E27] w-full left-0 bottom-0 flex flex-col overflow-hidden z-20 rounded-xl'
        >
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