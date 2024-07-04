'use client'

import React, { useState } from 'react'
import Footer from '../components/footers/QuickMenu'
import Header from '../components/Header'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import SelectionDropdown from '../components/dropdowns/SelectionDropdown'
import languages from '../components/temporaryJsons/language-list.json'
import MainComponents from '../components/MainComponents'

const SettingsPage = () => {
    const [option, changeOption] = useState(0);

    const langage = languages.map(language => ({
        content: language.Language,
        onClick: () => {
            console.log(`Selected option: ${language.Language}`);
        }
    }));

    return (
        <MainComponents>
            <div className='p-4'>
                <div>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20}></Image>
                        </div>
                        <p className='font-semibold text-lg'>Settings</p>
                    </div>
                </div>
                <div className='flex w-full items-center gap-1 mb-6'>
                    <button onClick={() => changeOption(0)}
                        className={`${option === 0 && ('border-b-2 font-bold border-b-gray-800')} text-${option === 0 ? 'black' : 'gray-500'} h-10 w-44 flex justify-center items-center gap-3`}>
                        <div>
                            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Account Icon' width={20} height={20}></Image>
                        </div>
                        Account Info
                    </button>
                    <button onClick={() => changeOption(1)}
                        className={`${option === 1 && ('border-b-2 font-bold border-b-gray-800')} text-${option === 1 ? 'black' : 'gray-500'} h-10 w-44 flex justify-center items-center gap-3`}>
                        <div>
                            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Verification Icon' width={20} height={20}></Image>
                        </div>
                        Verification
                    </button>
                </div>
                {option === 0 ? (
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='font-semibold'>Profile Info</p>
                            <div className='flex items-center gap-3 mb-3'>
                                <div>
                                    <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={80} height={80}></Image>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div>
                                        <p className='font-bold text-lg'>Username</p>
                                        <div className='flex gap-1 items-center text-sm text-gray-500'>
                                            <p>TG user ID:</p>
                                            <p>Referral Rank</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='font-semibold'>Email Verification</p>
                            <div className='bg-gray-800 text-white h-10 w-full rounded-xl flex justify-between p-4 items-center'>
                                Not Filed
                            </div>
                        </div>

                        <div>
                            <p className='font-semibold'>Language</p>
                            <SelectionDropdown items={langage} placeArrowOnRight={true} />
                        </div>
                    </div>
                ) : (
                    <div className='flex gap-3'>
                        <div className='bg-gray-700 w-full h-72 rounded-lg flex flex-col items-center justify-center p-4 gap-2'>
                            <div>
                                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Verifications Level 1 icon' width={45} height={45}></Image>
                            </div>
                            <p className='font-bold text-white'>Level 1</p>
                            <p className='text-sm text-gray-400'>Enable Two-factor to protect your account from unauthorized access.</p>
                            <button className='bg-gray-900 text-white p-2 h-10 w-full rounded-xl'>Verify Now</button>
                            <div className='flex items-center gap-3 text-xs'>
                                <div>
                                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Time icon' width={20} height={20}></Image>
                                </div>
                                <p className='text-gray-400'>Review Time:</p>
                                <p className='text-white'>few mins</p>
                            </div>
                        </div>
                        <div className='bg-gray-700 w-full h-72 rounded-lg flex flex-col items-center justify-center p-4 gap-2'>
                            <div>
                                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Verifications Level 2 icon' width={45} height={45}></Image>
                            </div>
                            <p className='font-bold text-white'>Level 2</p>
                            <p className='text-sm text-gray-400'>Enable Two-factor to protect your account from unauthorized access.</p>
                            <button className='text-gray-500 p-2 h-10 w-full rounded-xl'>Finish Basic Verification</button>
                            <div className='flex items-center gap-3 text-xs'>
                                <div>
                                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Time icon' width={20} height={20}></Image>
                                </div>
                                <p className='text-gray-400'>Review Time:</p>
                                <p className='text-white'>1-5 days</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MainComponents>
    )
}

export default SettingsPage