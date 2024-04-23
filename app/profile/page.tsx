'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import ToggleButton from '../components/ToggleButton'
import BorderedDropdown from '../components/Dropdown'
import languages from '../components/language-list.json'
import basePath from '../utilities/basepath'
import SelectionDropdown from '../components/SelectionDropdown'

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
    <div>
      <Header />
      <div className='px-4 pt-4'>
        <p className='font-bold text-lg'>Profile</p>
        <div className='flex items-center gap-3 my-3'>
          <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={60} height={60}></Image>
          <div>
            <p className='font-bold text-lg'>Username</p>
            <p>User since: Date Joined</p>
          </div>
        </div>
        <div className='font-bold'>
          <button onClick={() => changeOption(0)} className={`bg-${option === 0 ? 'gray-800' : 'white'} text-${option === 0 ? 'white' : 'black'} h-10 w-44 rounded-xl mr-5`}>Transactions</button>
          <button onClick={() => changeOption(1)} className={`bg-${option === 1 ? 'gray-800' : 'white'} text-${option === 1 ? 'white' : 'black'} h-10 w-44 rounded-xl`}>Settings</button>
        </div>
        <div className='pt-4'>
           {option === 0 ? (
            <div> 
              <p className='font-bold text-lg'>Transaction History</p>
                <div className='px-12 mt-2'>
                  <div className='flex justify-between'>
                    <p>Type</p>
                    <p>Amount</p>
                  </div>
                  <p className='pt-4'>New transactions may take up to 30 minutes to appear</p>
                </div>
            </div>
            ) : (
            <div> 
               <p className='font-bold text-lg'>Settings</p>
                <div className='mt-2'>
                  <p>Select preferred language</p>
                  <div>
                    <SelectionDropdown items={items} />
                  </div>
                  <p>Game full screen option</p>
                  <ToggleButton />
                </div>
            </div>)}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProfilePage