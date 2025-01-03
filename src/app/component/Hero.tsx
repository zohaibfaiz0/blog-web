import React from 'react'
import Image from 'next/image'

const HeroSec = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src='/assets/rexel.jpg'
        alt='Hero image'
        fill
        priority
        className='opacity-95'
        style={{
          objectFit: 'cover'
        }}
      />
      <div className='absolute justify-center inset-0 flex flex-col z-10 px-4 sm:px-6 space-y-3 sm:space-y-4 md:space-y-6'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFCC] drop-shadow-lg text-center sm:text-left'>
          Rev Up Your Knowledge
        </h2>
        <p className='drop-shadow-md text-[#FFFFFF] text-lg sm:text-xl md:text-2xl p-2 rounded-lg text-center sm:text-left'>
          Discover the latest car reviews and insights.
        </p>
        <div className='flex justify-center sm:justify-start'>
          <button className='w-40 sm:w-44 md:w-48 h-10 sm:h-11 md:h-12 bg-[#32AA27] text-white font-bold text-base sm:text-lg md:text-xl rounded-3xl py-2 px-4 sm:px-6 transition-all duration-300 ease-in-out hover:bg-[#28871F] whitespace-nowrap overflow-hidden text-ellipsis'>
            View Reviews
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSec