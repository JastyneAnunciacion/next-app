import React from 'react'
import QuickList from './QuickList'
import basePath from '../utilities/basepath';

interface QuickListGamesProps {
    gameListTitle: string;
    gameList: any[];
}

const QuickListGames = ({gameListTitle, gameList}: QuickListGamesProps) => {
  return (
    <QuickList headerIconPath="/images/pencil-circle-fill.256x256.png" title={gameListTitle} gapAmount={3} childrenList={gameList.map((item, i) => (
          <div key={i}>
            <button className='bg-gray-600 w-40 h-60 rounded-lg mt-2 cursor-pointer'>
            </button>
          </div>
    ))} />
  )
}

export default QuickListGames