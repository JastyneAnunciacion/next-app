import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface InvitesPromoProps {
    currentInvites: number;
    maxInvites: number;
}

const InvitesPromo = ({currentInvites, maxInvites}: InvitesPromoProps) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
            <p>Invite {maxInvites} Friends get {maxInvites} Freespins</p>
            <p>{currentInvites}/{maxInvites}</p>
        </div>
        <div>
            <div className='relative w-full h-3 bg-gray-600 rounded-full text-white font-bold flex items-center'>
                <div className='h-full bg-gray-900 rounded-full' style={{ width: `${(currentInvites / maxInvites) * 100}%` }}/>
                <p className='absolute' style={{left: '30%'}}>3</p>
                <p className='absolute' style={{ left: '60%'}}>6</p>
                <div className='absolute' style={{ right: '0%'}}>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Token Bets Icon' width={30} height={30}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvitesPromo