'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import MainComponents from '../components/MainComponents'
import Deposit from '../components/wallets/Deposit'
import Withdraw from '../components/wallets/Withdraw'
import BuyCrypto from '../components/wallets/BuyCrypto'

const WalletPage = () => {
  const [option, changeOption] = useState(0);

  return (
    <MainComponents footerPage='Wallet'>
      <div className='w-full max-w-[91.88%] responsive-text text-nowrap'>
        <div className='flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241b42] mb-[10px]'>
          <p className='flex justify-center items-center w-full text-[#b575e1] text-xl'>Wallet</p>
        </div>
        <div className='flex w-full h-[49px] mb-[24px] justify-between items-center border border-[#3B335D] rounded-lg'>
          <div className={`${option === 0 && 'bg-gradient-to-r from-[#64596C] via-[#BCA9CB] to-[#5E5465] p-[1px] rounded-lg'} w-[31.75%] h-full`}>
            <button onClick={() => changeOption(0)}
              className={`${option === 0 ? 'bg-gradient-to-r from-[#B89BDC] to-[#664195] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} px-[21.43%] h-full w-full flex justify-center items-center gap-[10px]`}>
              <div className='shrink-0 '>
                <Image src={`${basePath}/images/${option === 0 ? 'safe-image.png' : 'safe-purple-image.png'}`} alt='Deposit Icon' width={20} height={20} />
              </div>
              <p>Deposit</p>
            </button>
          </div>
          <div className={`${option === 1 && 'bg-gradient-to-r from-[#736260] via-[#CBADA9] to-[#655654] p-[1px] rounded-lg'} w-[31.75%] h-full`}>
            <button onClick={() => changeOption(1)}
              className={`${option === 1 ? 'bg-gradient-to-r from-[#DCA39B] to-[#765753] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} px-[19.28%] h-full w-full flex justify-center items-center gap-[10px]`}>
              <div className='shrink-0 '>
                <Image src={`${basePath}/images/${option === 1 ? 'tip-jar-image.png' : 'tip-jar-purple-image.png'}`} alt='Deposit Icon' width={21} height={21} />
              </div>
              <p>Withdraw</p>
            </button>
          </div>
          <div className={`${option === 2 && 'bg-gradient-to-r from-[#607073] via-[#A9C7CB] to-[#546265] p-[1px] rounded-lg'} w-[31.75%] h-full`}>
            <button onClick={() => changeOption(2)}
              className={`${option === 2 ? 'bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} px-[15.71%] h-full w-full flex justify-center items-center gap-[10px]`}>
              <div className='shrink-0 '>
                <Image src={`${basePath}/images/tokens/${option === 2 ? 'BTC-fancy-outline-icon.png' : 'BTC-fancy-outline-purple-icon.png'}`} alt='Buy Crypto Icon' width={20} height={20} />                </div>
              <p>Buy Crypto</p>
            </button>
          </div>
        </div>
        {option === 0 && <Deposit />}
        {option === 1 && <Withdraw />}
        {option === 2 && <BuyCrypto />}
      </div>
    </MainComponents>
  )
}

export default WalletPage