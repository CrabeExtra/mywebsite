import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props { }

const Navbar: React.FC<Props> = () => {

    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">JB</p>
            </NavLink>

            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;