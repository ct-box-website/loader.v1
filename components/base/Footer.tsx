import React from 'react'
import { TbLoaderQuarter } from 'react-icons/tb'

const Footer = () => {
    return (
        <div className='p-2 flex flex-row items-center justify-between' >
            <div
                className='md:flex flex-row items-center hidden'
            >
                <TbLoaderQuarter size={32} color='#023047' />
                <p
                    className='font-poppins text-primary text-2xl font-semibold'
                >Loader</p>
            </div>
            <div>
                <p className='font-poppins' >
                    &copy; 2023 - Loader. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer