'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import languages from '../components/language-list.json'
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
        <div className='font-bold text-lg flex w-full justify-between border-b p-1'>
          <p>Profile</p>
          <p className='text-white'>Edit</p>
        </div>
        <div className='w-full flex flex-col items-center mt-2 text-white'>
          <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={90} height={90}></Image>
          <p className='text-lg'>Username</p>
          <p className='text-lg'>@Username</p>
        </div>
        <div className='flex items-center gap-3 mt-10 mb-3'>
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