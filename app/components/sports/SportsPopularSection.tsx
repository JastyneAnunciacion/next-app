import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SportsPopularSortButtons from './SportsPopularSortButtons'
import SportsBetCard from './SportsBetCard'
import sportsPopularData from '../temporaryJsons/sportsPopularBetData.json'

const SportsPopularSection = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2 items-center'>
        <div>
          <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Popular Icon' width={30} height={30}></Image>
        </div>
        <p className='text-xl'>Popular</p>
      </div>
      <SportsPopularSortButtons />
      {sportsPopularData.map((bet, index) => (
        <SportsBetCard
          key={index}
          sportImgSrc={bet.sportImgSrc}
          league={bet.league}
          date={bet.date}
          team1={bet.team1}
          team2={bet.team2}
          drawAmount={bet.drawAmount}
          gameType={bet.gameType}
        />
      ))}
    </div>
  )
}

export default SportsPopularSection