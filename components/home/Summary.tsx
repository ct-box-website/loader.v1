import React from 'react'
import Card from './summary/Card'

const Summary = () => {

    const fData = [
        {
            label: 'Students',
            data: '12,345'
        },
        {
            label: 'Courses',
            data: '789'
        },
        {
            label: 'Enrolled',
            data: '5,678'
        }
    ]

    return (
        <div className='mt-10 font-poppins ' >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' >
                <div>
                    <p className='text-xl md:text-2xl lg:text-3xl text-primary font-bold' >
                        Our number tell more about us
                    </p>
                </div>
                {fData.map((item, index) => (
                    <div key={index} >
                        <Card
                            label={item.label}
                            data={item.data}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Summary