import React from 'react'

interface ButtonProps {
    title?: string;
}

const Button: React.FC<ButtonProps> = ({
    title
}) => {
    return (
        <button
            className='
        bg-primary 
        text-white 
        font-poppins 
        px-5 
        py-3 
        rounded-md
        hover:bg-secondary
        transition-all
        duration-150
        ease-linear
        active:scale-95
        ' >
            {title || 'Button'}
        </button>
    )
}

export default Button