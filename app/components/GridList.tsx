import React from 'react'

interface GridListProps {
    list: any[]
}

const GridList = ({list}:GridListProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
        {list.map((item, i) => (
        <button className='bg-gray-600 w-40 h-60 rounded-lg mt-2 cursor-pointer g' key={i}>
        </button>
      ))}
    </div>
  )
}

export default GridList