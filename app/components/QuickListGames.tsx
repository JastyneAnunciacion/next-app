import React from 'react'
import QuickList from './QuickList'

interface quickListGamesProps {
    gameListTitle: string;
}

const QuickListGames = ({gameListTitle}: quickListGamesProps) => {
  return (
    <QuickList headerImagePath="/images/pencil-circle-fill.256x256.png" title={gameListTitle} childrenList />
  )
}

export default QuickListGames