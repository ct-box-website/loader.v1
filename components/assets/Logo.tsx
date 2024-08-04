import React from 'react'
import { TbLoaderQuarter } from 'react-icons/tb'

const Logo = () => {
    return (
        <div
            className='flex flex-row items-center'
        >
            <TbLoaderQuarter size={32} color='#023047' />
            <p
                className='font-poppins text-primary text-2xl font-semibold'
            >Loader</p>
        </div>
    )
}

export default Logo