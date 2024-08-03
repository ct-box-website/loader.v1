'use client'
import React, { useMemo } from 'react'
import Routes from '@/helpers/Route'
import { TbLoaderQuarter } from 'react-icons/tb'
import { usePathname } from 'next/navigation'
const Header = () => {
    const routes = useMemo(() => Routes, [])
    const pathname = usePathname();
    return (
        <div className='p-2 w-full flex flex-row justify-between items-center'>
            <div
                className='flex flex-row items-center'
            >
                <TbLoaderQuarter size={32} color='#023047' />
                <p
                    className='font-poppins text-primary text-2xl font-semibold'
                >Loader</p>
            </div>
            <div className='font-poppins' >
                <ul className='flex flex-row items-center gap-x-6' >
                    {routes.map((route, index) => (
                        <li key={index}>
                            {route.path === '/login'
                                ? <a href={route.path} className='bg-primary text-white px-5 py-2 rounded-md font-light' >{route.component}</a>
                                : <a href={route.path} className={`hover:text-secondary transition-all duration-150 ease-linear ${route.path === pathname && 'text-primary font-medium'} `} >{route.component}</a>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header