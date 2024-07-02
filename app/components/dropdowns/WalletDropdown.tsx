'use client';
import React, { useState } from 'react'
import list from '../temporaryJsons/wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';

const WalletDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);

  const selectedWallet = list[currentlySelected];
  return (
    <div className='bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[1px] rounded-lg'>
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full text-white px-[15px] flex items-center justify-between text-lg rounded-lg">
        {selectedWallet && (
          <div className='flex items-center gap-[11px]'>
            <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={25} height={25}></Image>
            <h3>{selectedWallet.Amount}</h3>
          </div>
        )}

        {!isOpen ?
          <div className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] h-7 w-7 rounded-lg items-center justify-center flex'>
            <Image src={`${basePath}/images/down-thin-arrow-image.png`} alt="Down Arrow" width={10} height={13} />
          </div>
          :
          <div className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] h-7 w-7 rounded-lg items-center justify-center flex'>
            <Image src={`${basePath}/images/up-thin-arrow-image.png`} alt="Up Arrow" width={10} height={13} />
          </div>
        }

        {isOpen && (
          <div className="bg-gray-800 absolute left-0 top-16 flex flex-col rounded-lg p-2 w-full h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {list.map((item, i) => (
              <button onClick={(() => setCurrentlySelected(i))} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center' key={i}>
                <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={20} height={20}></Image>
                <h3>{item.Amount}</h3>
              </button>
            ))}
          </div>
        )
        }
      </button>
    </div>
  )
}

export default WalletDropdown