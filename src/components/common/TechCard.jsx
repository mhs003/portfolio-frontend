import React from 'react'

const TechCard = ({ src, alt }) => {
    return (
        <div className='transition-colors bg-gray-900 hover:bg-gray-800 w-24 sm:w-[120px] rounded-md flex items-center justify-center flex-col p-2 py-3 gap-3'>
            <img src={src} alt={alt} className='w-9 sm:w-11' />
            <p className='text-white text-xs sm:text-base font-bold'>{alt}</p>
        </div>
    )
}

export default TechCard