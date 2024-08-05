import React from 'react'

interface CardProps {
    label?: string;
    data?: any
}

const Card: React.FC<CardProps> = ({
    label,
    data
}) => {
    return (
        <div
            className='bg-slate-100 p-4 rounded-md'
        >
            <p className='text-slate-500 lg:text-xl md:text-lg text-base font-semibold mb-4' >{label}</p>
            <p className='text-2xl font-bold text-secondary' >{data}</p>
        </div>
    )
}

export default Card