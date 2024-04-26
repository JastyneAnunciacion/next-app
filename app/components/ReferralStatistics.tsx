import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ReferralStatistics = () => {
  return (
    <div>
      <div className='w-full flex flex-col gap-2 mt-3'>
          <div className='flex gap-2'>
              <div className='w-full h-[70px] bg-gray-400 rounded-lg p-2'>
                  <p>Referrals</p>
                  <div className='flex gap-1 items-center'>
                      <div>
                          <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Wagered Icon' width={20} height={20}></Image>
                      </div>
                      <p>0.00</p>
                  </div>
              </div>
              <div className='w-full h-[70px] bg-gray-400 rounded-lg p-2'>
                  <p>Referrals Wagered</p>
                  <div className='flex gap-1 items-center'>
                      <div>
                          <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Bets Icon' width={20} height={20}></Image>
                      </div>
                      <p>0.00</p>
                  </div>
              </div>
          </div>
          <div className='w-full h-[70px] bg-gray-400 rounded-lg p-2'>
              <p>Total Earned</p>
              <div className='flex gap-1 items-center'>
                  <div>
                      <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                  </div>
                  <p>0.00</p>
              </div>
          </div>
          <div className='w-full h-[70px] bg-gray-600 rounded-lg p-2 flex justify-between'>
              <div>
                <p>Claimable Earnings</p>
                <div className='flex gap-1 items-center'>
                    <div>
                        <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                    </div>
                    <p>0.00</p>
                </div>
              </div>
              <button className='bg-gray-800 w-44 h-10 self-center rounded-2xl text-white'>
                Claim Earnings
              </button>
          </div>
      </div>
    </div>
  )
}

export default ReferralStatistics