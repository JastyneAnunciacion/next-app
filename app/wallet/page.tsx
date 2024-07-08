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
      <div className='w-full'>
        <div className='text-lg flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241b42]'>
          <p className='flex justify-center items-center w-full text-[#b575e1] text-xl'>Wallet</p>
        </div>
        <div className='flex justify-between my-5'>
          <div className='flex w-full h-[49px] items-center gap-1 border border-[#3B335D] rounded-lg'>
            <button onClick={() => changeOption(0)}
              className={`${option === 0 ? 'bg-gradient-to-r from-[#B89BDC] to-[#664195] rounded-lg' : 'rounded-lg'}  h-full w-full flex justify-center items-center gap-3`}>
              <div className='shrink-0 '>
                <Image src={`${basePath}/images/safe-image.png`} alt='Deposit Icon' width={20} height={20} />
              </div>
              Deposit
            </button>
            <button onClick={() => changeOption(1)}
              className={`${option === 1 ? 'bg-gradient-to-r from-[#DCA39B] to-[#765753] rounded-lg' : 'rounded-lg'}  h-full w-full flex justify-center items-center gap-3`}>
              <div className='shrink-0 '>
                <Image src={`${basePath}/images/tip-jar-colored-image.png`} alt='Deposit Icon' width={21} height={21} />
              </div>
              Withdraw
            </button>
            <button onClick={() => changeOption(2)}
              className={`${option === 2 ? 'bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] rounded-lg' : 'rounded-lg'}  h-full w-full flex justify-center items-center gap-3`}>
              <div>
                <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Withdraw Icon' width={20} height={20}></Image> */}
              </div>
              Withdraw
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