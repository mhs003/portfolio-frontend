import React from 'react'

const PageTitle = ({ title, md }) => {
    return (
        <>
            <div className='flex justify-center items-center flex-col py-10'>
                <h1 className={'font-bold font-sans text-black uppercase [text-stroke:1px_rgb(6_182_212_/_1)] [-webkit-text-stroke:1px_rgb(6_182_212_/_1)] ' + (md ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-6xl')}>{title}</h1>
            </div>
        </>
    )
}

export default PageTitle