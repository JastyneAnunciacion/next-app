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
      headerIconPath="/images/pencil-circle-fill.256x256.png"
      title={gameListTitle}
      gapAmount={3}
      viewAllLink='/games'
      childrenList={gameList.map((item, i) => {
        const imageIndex = Math.floor(Math.random() * 7) + 1;
        return (
          <div key={i}>
            <button className='bg-gray-600 w-[198px] h-[251px] rounded-lg mt-2 cursor-pointer'>
              <Image
                src={`${basePath}/images/game-icon-${imageIndex}.png`}
                alt="Banner"
                width={20}
                height={20}
                className="w-full h-full rounded-lg"
              />
            </button>
          </div>
        );
      })}
    />
  )
}

export default QuickListGames