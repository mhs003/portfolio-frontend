import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ img, title, link, time }) => {
    return (
        <div className='group relative w-[340px] bg-gradient-to-br from-indigo-700 via-purple-950 to-black rounded-lg p-3'>
            <div className='overflow-hidden min-h-[200px] rounded-lg'>
                <img className='transition group-hover:scale-[1.35] w-full min-h-[200px]' src={img} alt={title} />
            </div>
            <div className='absolute bottom-3 w-[316px] rounded-b-lg p-4 backdrop-blur-lg'>
                <Link to={link} className='text-white text-sm font-bold underline underline-offset-4 hover:text-cyan-500'>{title}</Link>
                <p className='text-gray-500 text-[10px] mt-2'>{time}</p>
            </div>
        </div>
    )
}

export default BlogCard