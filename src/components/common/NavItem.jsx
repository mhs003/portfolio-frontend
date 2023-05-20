import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({ icon, href, alt }) => {
    return (
        <>
            <NavLink to={href} className="group relative w-9 p-2 cursor-pointer transition-all hover:bg-cyan-500 hover:scale-110 rounded-full">
                <span className='group-hover:opacity-100 block opacity-0 absolute -top-[20px] transition-opacity rounded-full py-0.5 px-2 text-[10px] scale-90 left-1/2 -translate-x-1/2 bg-cyan-500 text-white'>{alt}</span>
                <img src={icon} alt={alt} />
            </NavLink>
        </>
    );
}

export default NavItem