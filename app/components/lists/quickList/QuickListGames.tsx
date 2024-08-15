import React from 'react'
import QuickList from './QuickList'
import basePath from '../../../utilities/basepath';
import Image from 'next/image';

interface GameCard {
  gameName: string,
  provider: string
}

interface QuickListGamesProps {
  gameListTitle: string;
  gameList: any[];
}

const QuickListGames = ({ gameListTitle, gameList }: QuickListGamesProps) => {
  return (
    <QuickList
      headerIconPath=""
      title={gameListTitle}
      gap='3.12vw'
      viewAllLink='/games'
      childrenList={gameList.map((item, i) => {
        const imageIndex = Math.floor(Math.random() * 7) + 1;
        return (
          <button key={i} className={`bg-gray-600 w-[41.25vw] aspect-[198/251] shrink-0 rounded-xl`}>
            <Image
              src={`${basePath}/images/game-icon-${imageIndex}.png`}
              alt="Game Banner"
              layout='responsive'
              width={100}
              height={100}
              className="w-full h-full rounded-lg"
            />
          </button>
        );
      })}
    />
  )
}

export default QuickListGames