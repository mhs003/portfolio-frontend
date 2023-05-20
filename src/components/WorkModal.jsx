import React from 'react'

const WorkModal = ({ id, details }) => {
    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <label htmlFor={id} className="modal cursor-pointer backdrop-blur-md">
                <label htmlFor='' className="modal-box bg-gradient-to-br from-indigo-700 to-purple-950 ">
                    <div className=''>
                        <img src={details.img} alt={details.title} className='w-full rounded-lg' />
                        <h1 className='text-2xl md:text-xl font-bold text-center mt-4 mb-1'>{details.title}</h1>
                        <h1 className='text-base md:text-lg text-center mb-'>{details.subtitle}</h1>
                        <p className='my-3'><b>Description:</b> {details.description}</p>
                        <p className='text-center'><a target="_blank" rel="noopener noreferrer" className='link link-info text-lg' href={details.link}>Visit the site</a></p>
                        <p className='text-center mt-5'><label htmlFor={id} className='link link-error'>Close</label></p>
                    </div>
                </label>
            </label>
        </>
    )
}

export default WorkModal