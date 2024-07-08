import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface InvitesPromoProps {
    currentInvites: number;
    maxInvites: number;
}

const InvitesPromo = ({ currentInvites, maxInvites }: InvitesPromoProps) => {
    return (
        <div className='flex flex-col gap-[5px] w-full mb-[54px]'>
            <div>
                <div className='relative w-full h-[38px] p-3 bg-[#241b42] rounded-full text-white font-bold flex items-center'>
                    <div className='h-2 bg-gradient-to-r from-[#238ce3] to-[#c33afe] rounded-full' style={{ width: `${(currentInvites / maxInvites) * 100}%` }} />
                </div>
            </div>
            <div className='flex justify-between items-center px-3'>
                <p className='text-[#b575e1]'>Invite {maxInvites} Friends get {maxInvites} Freespins</p>
                <p>{currentInvites}/{maxInvites}</p>
            </div>
        </div>
    )
}

export default InvitesPromo