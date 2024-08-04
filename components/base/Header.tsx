'use client'
import React, { useMemo } from 'react'
import Routes from '@/helpers/Route'
import { TbLoaderQuarter } from 'react-icons/tb'
import { usePathname } from 'next/navigation'
import { RiMenu3Fill } from 'react-icons/ri'
import { MdSubscriptions } from 'react-icons/md'
import { IoBookSharp, IoHome } from 'react-icons/io5'
import { BiSolidContact } from 'react-icons/bi'
import { FaInfoCircle } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import Logo from '../assets/Logo'
const Header = () => {
    const routes = useMemo(() => Routes, [])
    const pathname = usePathname();
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='p-2 w-full flex flex-row justify-between items-center'>
                    <Logo />
                    <div className='font-poppins md:block hidden' >
                        <ul className='flex flex-row items-center gap-x-6' >
                            {routes.map((route, index) => (
                                <li key={index}>
                                    {route.path === '/login'
                                        ? <a href={route.path} className='bg-primary hover:bg-secondary transition-all duration-150 ease-linear text-white px-5 py-2 rounded-md font-light' >{route.component}</a>
                                        : <a href={route.path} className={`hover:text-secondary transition-all duration-150 ease-linear ${route.path === pathname && 'text-primary font-medium'} `} >{route.component}</a>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>

                    <label htmlFor="my-drawer-4" className="drawer-button md:hidden block cursor-pointer">
                        <RiMenu3Fill size={24} className='font-semibold' />
                    </label>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <div className='flex items-center flex-row mb-5' >
                        <TbLoaderQuarter size={32} color='#023047' />
                        <span className='font-poppins text-xl font-bold' >
                            <a href="/home" className='border-b-0 active:bg-none' >Loader</a>
                        </span>
                    </div>
                    {/* Sidebar content here */}
                    <li className='mb-2' >
                        <a href="/home"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            ${pathname === '/home' && 'active'}`}
                        >
                            <IoHome />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='mb-2' >
                        <a href="/subscribe"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            ${pathname === '/subscribe' && 'active'}`}
                        >
                            <MdSubscriptions />
                            <span>Subscribe</span>
                        </a>
                    </li>
                    <li className='mb-2' >
                        <a href="/courses"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            ${pathname === '/courses' && 'active'}`}
                        >
                            <IoBookSharp />
                            <span>Courses</span>
                        </a>
                    </li>

                    <li className='mb-2' >
                        <a href="/contact"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            ${pathname === '/contact' && 'active'}`}
                        >
                            <BiSolidContact />
                            <span>Contact</span>
                        </a>
                    </li>
                    <li className='mb-2' >
                        <a href="/about"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            ${pathname === '/about' && 'active'}`}
                        >
                            <FaInfoCircle />
                            <span>About</span>
                        </a>
                    </li>
                    <li className='mb-2' >
                        <a href="/login"
                            className={`font-poppins
                            flex flex-row items-center text-base
                            `}
                        >
                            <FiLogIn />
                            <span>Login</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header