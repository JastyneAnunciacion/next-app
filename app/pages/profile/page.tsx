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
      <div className='absolute w-full aspect-[561.36/295.08] flex-shrink-0 top-[26.81vw] z-0'>
        <Image className='z-0' src={`${basePath}/images/profile-page-bg-design.png`} alt='Large Profile BG ' layout='responsive' width={100} height={100} />
      </div>
      <div className='w-full max-w-[91.88%] font-manrope text-[3.33vw]'>
        <div className='relative flex items-center justify-between w-full h-[10.42vw] rounded-3xl bg-[#241A43] z-10 px-[4.38vw]'>
          <p className='absolute left-1/2 transform -translate-x-1/2 text-[#b575e1] font-semibolds text-[4.17vw]'>Profile</p>
          <Link href='/pages/settings' className='flex-shrink-0 ml-auto w-[5.21vw] aspect-square'>
            <Image src={`${basePath}/images/cog-image.png`} alt='Profile Settings Icon' layout='responsive' width={100} height={100} />
          </Link>
        </div>


        <div className='mt-[7.08vw] mb-[6.44vw] gap-[2.94vw] flex flex-col items-center'>
          <div className='flex-shrink-0 w-[28.54vw] aspect-square'>
            <Image className='rounded-full' src={`${basePath}/images/temporary-profile-large-image.png`} alt='Large Profile Icon' layout='responsive' width={100} height={100} />
          </div>
          <p className='text-[4.17vw] font-medium'>Username</p>
        </div>

        <div className='w-full mb-[7.29vw]'>
          <Level />
        </div>

        <div className='flex flex-col gap-[7.29vw]'>
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