'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import languages from '../../components/temporaryJsons/language-list.json'
import basePath from '../../utilities/basepath'
import Level from '../../components/Level'
import Statistics from '../../components/Statistics'
import Cashback from '../../components/Cashback'
import TransactionHistoryTable from '../../components/TransactionHistoryTable'
import MainComponents from '../../components/MainComponents'
import Link from 'next/link'

interface ProfileProps {
  username: string,
  dateJoined: string,
}

const items = languages.map(language => ({
  content: language.Language,
  onClick: () => {
    console.log(`Selected language: ${language.Language}`);
  }
}));

const ProfilePage = () => {
  const [option, changeOption] = useState(0);

  return (
    <MainComponents footerPage='Profile'>
      <div className='absolute w-full h-[295.08px] flex-shrink-0 top-[130px] z-0'>
        <Image className='z-0' src={`${basePath}/images/profile-page-bg-design.png`} alt='Large Profile BG ' layout='responsive' width={100} height={100} />
      </div>
      <div className='w-full max-w-[91.88%]'>
        <div className='relative text-lg flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241A43] z-10'>
          <p className='absolute left-1/2 transform -translate-x-1/2 text-[#b575e1] text-xl'>Profile</p>
          <Link href='/pages/settings' className='flex-shrink-0 ml-auto'>
            <Image src={`${basePath}/images/cog-image.png`} alt='Profile Settings Icon' width={25} height={25} />
          </Link>
        </div>

        <div className='relative w-full flex flex-col gap-2 items-center text-white'>

          <div className='mt-[34px] gap-[14px] flex flex-col items-center'>
            <div className='flex-shrink-0'>
              <Image className='rounded-full' src={`${basePath}/images/temporary-profile-large-image.png`} alt='Large Profile Icon' width={137} height={137} />
            </div>
            <p className='text-responsive-md'>Username</p>
          </div>
        </div>
        <div className='relative flex items-center gap-3 mt-8 mb-3'>
          <div className='w-full'>
            <Level />
          </div>
        </div>
        <div className='flex flex-col'>
          <Statistics />
          <Cashback />
          {/* <MostWageredGames /> */}
          <TransactionHistoryTable />
        </div>
      </div>
    </MainComponents>
  )
}

export default ProfilePage