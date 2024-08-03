import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='py-5 font-poppins'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >
                <div className='flex flex-col justify-center' >
                    <p className='font-poppins lg:text-5xl md:text-4xl text-2xl font-bold leading-snug' >
                        Learn new skills online with our interactive courses.
                    </p>
                    <p className='my-5' >
                        Start learning today with a free trial period.
                    </p>
                    <div className='flex' >
                        <Button title='Start learning today' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end' >
                    <Image
                        src={'/svg-icon/hero_svg.svg'}
                        alt='Hero Icon'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero