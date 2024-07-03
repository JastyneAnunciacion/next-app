'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footers/Footer'
import Image from 'next/image'
import { useState } from 'react'
import languages from '../components/temporaryJsons/language-list.json'
import basePath from '../utilities/basepath'
import Level from '../components/Level'
import Statistics from '../components/Statistics'
import Cashback from '../components/Cashback'
import TransactionHistoryTable from '../components/TransactionHistoryTable'
import MostWageredGames from '../components/MostWageredGames'

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
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
      <Header />
      <div className='px-4 pt-4'>
        <div className='text-lg flex items-center justify-between w-full h-14 rounded-lg px-4 bg-[#241b42]'>
          <p className='absolute left-1/2 transform -translate-x-1/2 text-[#b575e1] text-xl'>Profile</p>
          <div className='flex-shrink-0 ml-auto'>
            <Image src={`${basePath}/images/cog-image.png`} alt='Profile Settings Icon' width={25} height={25} />
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 items-center mt-6 text-white'>
          <div className='absolute w-full h-[295.08px] flex-shrink-0 border'>
            <Image className='rounded-full' src={`${basePath}/images/profile-page-bg-design.png`} alt='Large Profile Icon' width={137} height={137}>
            </Image>
          </div>
          <div className='flex-shrink-0'>
            <Image className='rounded-full' src={`${basePath}/images/temporary-profile-large-image.png`} alt='Large Profile Icon' width={137} height={137} />
          </div>
          <p className='text-lg'>Username</p>
        </div>
        <div className='flex items-center gap-3 mt-8 mb-3'>
          <div className='w-full'>
            <Level />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Statistics />
          <Cashback />
          <MostWageredGames />
          <TransactionHistoryTable />
        </div>
      </div>
      <Footer currentPage='Profile' />
    </div>
  )
}

export default ProfilePage