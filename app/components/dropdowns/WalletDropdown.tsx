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
      <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full text-white p-2 pr-4 flex items-center justify-between text-lg rounded-lg">
        {selectedWallet && (
          <div className='flex items-center gap-3'>
            <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={25} height={25}></Image>
            <h3>{selectedWallet.Amount}</h3>
          </div>
        )}

        {!isOpen ?
          <Image className='bg-[#925cf7] h-7 w-7 rounded-lg pr' src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
          :
          <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={40} height={40} />
        }

        {isOpen && (
          <div className="bg-gray-800 absolute left-0 top-11 flex flex-col rounded-lg p-2 w-full h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
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