import React from 'react'
import QuickList from './QuickList'

interface GameCard {
  gameName: string,
  provider: string
}

interface QuickListGamesProps {
    gameListTitle: string;
    gameList: any[];
}

const QuickListGames = ({gameListTitle, gameList}: QuickListGamesProps) => {
  return (
    <QuickList headerIconPath="/images/pencil-circle-fill.256x256.png" title={gameListTitle} gapAmount={3} viewAllLink='/games' childrenList={gameList.map((item, i) => (
          <div key={i}>
            <button className='bg-gray-600 w-40 h-28 rounded-lg mt-2 cursor-pointer' />
            <div className='text-sm'>
              <p className='font-bold'>Game Name</p>
              <p>Provider</p>
            </div>
          </div>
    ))} />
  )
}

export default QuickListGames