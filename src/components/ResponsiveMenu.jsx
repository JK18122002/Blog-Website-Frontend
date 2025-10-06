import React, { useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa'; // Close icon
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';

const ResponsiveMenu = ({ openNav, setOpenNav, logoutHandler }) => {
    const { user } = useSelector(store => store.auth);
    const menuRef = useRef();

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenNav(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setOpenNav]);

    return (
        <div
            className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-800 px-8 pb-6 pt-16 text-black dark:text-gray-100 md:hidden rounded-r-xl shadow-md transition-all`}
            ref={menuRef}
        >
            {/* Close Button */}
            <button
                onClick={() => setOpenNav(false)}
                className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300"
            >
                <FaTimes />
            </button>

            <div>
                <div className='flex items-center justify-start gap-3'>
                    {
                        user ? (
                            <Avatar className="w-14 h-14">
                                <AvatarImage src={user.photoUrl} size={50} />
                            </Avatar>
                        ) : <FaUserCircle size={50} />
                    }
                    <div>
                        <h1>Hello, {user?.firstName || "User"}</h1>
                        <h1 className='text-sm text-slate-500'>Premium User</h1>
                    </div>
                </div>

                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-2xl font-semibold'>
                        <Link to="/" onClick={() => setOpenNav(false)}><li className='cursor-pointer'>Home</li></Link>
                        <Link to="/blogs" onClick={() => setOpenNav(false)}><li className='cursor-pointer'>Blog</li></Link>
                        <Link to="/about" onClick={() => setOpenNav(false)}><li className='cursor-pointer'>About</li></Link>
                        {
                            user ? (
                                <Button onClick={() => { logoutHandler(); setOpenNav(false); }}>Logout</Button>
                            ) : (
                                <Link to={'/signup'} onClick={() => setOpenNav(false)}><Button>Signup</Button></Link>
                            )
                        }
                    </ul>
                </nav>
            </div>

            <div className='pb-20'>
                <h1>Made with ❤️ by Jk</h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
