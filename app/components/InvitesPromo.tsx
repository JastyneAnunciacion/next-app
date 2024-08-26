import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface InvitesPromoProps {
    currentInvites: number;
    maxInvites: number;
}

const InvitesPromo = ({ currentInvites, maxInvites }: InvitesPromoProps) => {
    return (
        <div className='flex flex-col gap-[1.04vw] w-full'>
            <div>
                <div className='w-full aspect-[441/38] px-[2.72%] py-[3.40%] bg-[#241b42] rounded-full text-white font-bold flex items-center'>
                    <div className='h-full bg-gradient-to-r from-[#1E90E2] to-[#CB36FF] rounded-full' style={{ width: `${(currentInvites / maxInvites) * 100}%` }} />
                </div>
            </div>
            <div className='flex justify-between items-center px-3 text-[3.33vw] font-medium'>
                <p className='text-[#D187FF]'>Invite {maxInvites} Friends get {maxInvites} Freespins</p>
                <p>{currentInvites}/{maxInvites}</p>
            </div>
        </div>
    )
}

export default InvitesPromo