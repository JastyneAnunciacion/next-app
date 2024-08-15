'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import MainComponents from '../../components/MainComponents'
import Deposit from '../../components/wallets/Deposit'
import Withdraw from '../../components/wallets/Withdraw'
import BuyCrypto from '../../components/wallets/BuyCrypto'

const WalletPage = () => {
  const [option, changeOption] = useState(0);

  return (
    <MainComponents footerPage='Wallet'>
      <div className='w-full max-w-[91.88%] font-manrope font-medium text-[3.33vw]'>
        <div className='flex items-center justify-between w-full h-[6.74vh] rounded-lg  bg-[#241A43] mb-[2.08vw]'>
          <p className='flex justify-center items-center w-full text-[#D187FF] text-[4.17vw] font-semibold'>Wallet</p>
        </div>

        <div className='flex w-full h-[10.21vw] mb-[5vw] justify-between items-center border border-[#3B335D] text-nowrap rounded-lg'>
          <div className={`${option === 0 && 'bg-gradient-to-r from-[#64596C] via-[#BCA9CB] to-[#5E5465] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full `}>
            <button onClick={() => changeOption(0)}
              className={`${option === 0 ? 'bg-gradient-to-r from-[#B89BDC] to-[#664195] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[2.09vw]`}>
              <div className='shrink-0 w-[3.87vw] aspect-[18.57/20]'>
                <Image src={`${basePath}/images/${option === 0 ? 'safe-image.png' : 'safe-purple-image.png'}`} alt='Deposit Icon' layout='responsive' width={100} height={100} />
              </div>
              <p>Deposit</p>
            </button>
          </div>
          <div className={`${option === 1 && 'bg-gradient-to-r from-[#736260] via-[#CBADA9] to-[#655654] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full`}>
            <button onClick={() => changeOption(1)}
              className={`${option === 1 ? 'bg-gradient-to-r from-[#DCA39B] to-[#765753] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[1.82vw]`}>
              <div className='shrink-0 w-[3.09vw] aspect-[14.82/21]'>
                <Image src={`${basePath}/images/${option === 1 ? 'tip-jar-image.png' : 'tip-jar-purple-image.png'}`} alt='Deposit Icon' layout='responsive' width={100} height={100} />
              </div>
              <p>Withdraw</p>
            </button>
          </div>
          <div className={`${option === 2 && 'bg-gradient-to-r from-[#607073] via-[#A9C7CB] to-[#546265] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full`}>
            <button onClick={() => changeOption(2)}
              className={`${option === 2 ? 'bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[1.84vw]`}>
              <div className='shrink-0 w-[3.28vw] aspect-[15.75/21]'>
                <Image src={`${basePath}/images/tokens/${option === 2 ? 'BTC-fancy-outline-icon.png' : 'BTC-fancy-outline-purple-icon.png'}`} alt='Buy Crypto Icon' layout='responsive' width={100} height={100} />
              </div>
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