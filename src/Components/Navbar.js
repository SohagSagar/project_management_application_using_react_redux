import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './utls/Logo';
import { RiShutDownLine } from 'react-icons/ri';

const Navbar = () => {
    const menu = <>
        <li className='cursor-pointer hover:text-primary transition-all delay-50'><Link to={'/home'}>Home</Link></li>
        <li className='cursor-pointer hover:text-primary transition-all delay-50'><Link>My Team</Link></li>
        <li className='cursor-pointer hover:text-primary transition-all delay-50'><Link>Task</Link></li>
        <li className='disabled'>Sohag Sagar</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to={'/home'} className=" normal-case text-lg"><Logo /></Link>
            </div>

            <div className="navbar-end hidden lg:flex items-center">
                <ul className=" menu-horizontal p-0 gap-x-10">
                    {menu}
                </ul>
            </div>
            <div className="dropdown dropdown-end pl-10">

                <label tabIndex={0} className=" avatar">
                    <div className="w-10 rounded-full cursor-pointer">
                        {/* <p>Sohag sagar</p> */}
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                
                <ul tabIndex={0} className="mt-3 p-2 shadow  dropdown-content bg-base-100 rounded-box w-28">
                    <li className='text-center cursor-pointer font-semibold text-primary'>
                        <div className='flex items-center justify-center gap-x-2'>
                            <RiShutDownLine />
                            <p>Logout</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;