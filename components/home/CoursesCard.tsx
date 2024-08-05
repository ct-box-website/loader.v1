import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface CoursesCardProps {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}
const CoursesCard: React.FC<CoursesCardProps> = ({
    title,
    description,
    image,
    link
}) => {
    return (
        <div className='rounded-md border border-slate-300 p-2 font-poppins transition-all duration-200 ease-linear hover:shadow-lg hover:scale-[1.01]' >
            <div className='w-full h-40 relative' >
                <Image
                    src={`${image}`}
                    alt='Image'
                    width={1200}
                    height={1200}
                    className='w-full h-full rounded-md object-cover hover:opacity-50 transition-all duration-150 ease-linear'
                />
            </div>
            <div className='p-2 pt-3' >
                <p className='md:text-lg text-base font-semibold text-secondary' >{title}</p>
                <p className='md:text-sm pt-2 text-gray-500 line-clamp-2' >{description}</p>
                <Link href={`${link}`} className='text-xs text-quaternary'  >
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default CoursesCard