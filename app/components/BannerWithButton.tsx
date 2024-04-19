import React from 'react'

const BannerWithButton = () => {
  return (
    <div className='relative bg-gray-400 mt-4 h-80 flex justify-center items-center rounded-lg w-[min(100%,70rem)]'>
        <button className='absolute bg-gray-800 text-white text-lg rounded-3xl bottom-4 w-[min(90%,30rem)] h-14'>Check Banner</button>
    </div>
  )
}

export default BannerWithButton