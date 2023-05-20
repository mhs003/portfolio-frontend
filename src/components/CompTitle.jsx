import React from 'react'

const CompTitle = ({ title }) => {
    return (
        <>
            <div className='mb-5'>
                <h2 className='text-xl sm:text-2xl text-white'>{title}</h2>
                <div className='mt-2 rounded-full w-36 h-1 bg-cyan-500'></div>
            </div>
        </>
    )
}

export default CompTitle