import React from 'react'
import WorkModal from '../WorkModal'

const WorkCard = ({ id, details }) => {
    return (
        <div className='group p-1 w-80 rounded-xl overflow-hidden bg-gradient-to-br from-black via-indigo-900 to-purple-800'>
            <div className='rounded-xl overflow-hidden'>
                <img src={details.img} className='transition group-hover:scale-[1.35]' alt={details.title} />
            </div>
            <div className='p-3'>
                <h1 className='text-lg sm:text-xl font-bold'>{details.title}</h1>
                <p className='text-center'><label htmlFor={id} className='btn btn-outline btn-success btn-sm sm:btn-md sm:text-lg my-3 normal-case'>Details</label></p>
            </div>
            <WorkModal id={id} details={details} />
        </div>
    )
}

export default WorkCard