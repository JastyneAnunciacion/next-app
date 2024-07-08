'use client';
import React, { useState } from 'react'
import list from '../temporaryJsons/currencies-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface CurrencyDropdownProps {
  currencyIconWidthPixel?: number,
  currencyIconHeightPixel?: number,
  dropDownButtonWidthPixel?: number,
  dropDownButtonHeightPixel?: number,
  dropDownArrowWidthPixel?: number,
  dropDownArrowHeightPixel?: number,
  dropDownOffset?: number,
}

const CurrencyDropdown = ({
  currencyIconWidthPixel = 25,
  currencyIconHeightPixel = 25,
  dropDownButtonWidthPixel = 28,
  dropDownButtonHeightPixel = 28,
  dropDownArrowWidthPixel = 10,
  dropDownArrowHeightPixel = 13,
  dropDownOffset = 0
}: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);


  const selectedCurrency = list[currentlySelected];
  return (
    <div className='relative bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[1px] rounded-lg'>
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full text-white px-[15px] flex items-center justify-between text-lg rounded-lg">
        {selectedCurrency && (
          <div className='flex items-center gap-[11px]'>
            <Image src={basePath + selectedCurrency.CountryIconSrc} alt="Currency Icon" width={currencyIconWidthPixel} height={currencyIconHeightPixel}></Image>
            <p className='text-[20px]'>{selectedCurrency.Amount}</p>
          </div>
        )}

        <div className='flex gap-[19px]'>
          <div className='flex gap-[11px] items-center'>
            <div className='shrink-0'>
              <Image src={basePath + selectedCurrency.CountryIconSrc} alt="Currency Icon" width={currencyIconWidthPixel} height={currencyIconHeightPixel}></Image>
            </div>
            <p className='text-[20px]'>{selectedCurrency.Currency}</p>
          </div>
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
        </div>


        {isOpen && (
          <div className="bg-[#1A1E27] w-full absolute left-0 bottom-0 z-20" style={{ transform: `translateY(calc(100% + ${dropDownOffset}px))` }}>
            <div className="flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10">
              {list.map((item, i) => (
                <button onClick={() => {
                  setCurrentlySelected(i);
                  setIsOpen(false);
                }} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center' key={i}>
                  <Image src={basePath + item.CountryIconSrc} alt="Currency Icon" width={20} height={20}></Image>
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

export default CurrencyDropdown