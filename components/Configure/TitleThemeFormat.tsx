import React from 'react'

const TitleThemeFormat = ({ title }: { title: string }) => {
    return (
        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl' >
            {title}
        </p>
    )
}

export default TitleThemeFormat