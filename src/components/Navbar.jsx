import React from 'react'
import { home, works, skills, blogs, contact, about } from '../icons/Navicons'
import './Navbar.css'
import NavItem from './common/NavItem'



const Navbar = () => {
    return (
        <div className='fixed bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-md border-2 border-cyan-500 rounded-full z-40'>
            <div className='flex flex-row justify-center items-center gap-2 p-2 px-3 m-0 select-none'>
                <NavItem icon={home} href="/" alt="Home" />
                <NavItem icon={works} href="/works" alt="Works" />
                <NavItem icon={skills} href="/techs" alt="Technology" />
                <NavItem icon={blogs} href="/blogs" alt="Blogs" />
                <NavItem icon={contact} href="/contact" alt="Contact" />
                <NavItem icon={about} href="/about" alt="About" />
            </div>
            <div className='w-28 h-1 bg-cyan-600 fixed -bottom-3 left-1/2 -translate-x-1/2 rounded-full'></div>
        </div>
    )
}

export default Navbar