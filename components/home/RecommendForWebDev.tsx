import React from 'react'
import TitleThemeFormat from '../Configure/TitleThemeFormat'
import CoursesCard from './CoursesCard'

const RecommendForWebDev = () => {

    const courses = [
        {
            title: 'React JS',
            description: 'Learn React JS and build modern web applications.',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200309202057/How-To-Learn-ReactJS-A-Complete-Guide-For-Beginners.jpg',
            link: '/courses/react-js'
        },
        {
            title: 'Node JS',
            description: 'Learn Node JS and build server-side applications.',
            image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230331172641/NodeJS-copy.webp',
            link: '/courses/node-js'
        },
        {
            title: 'Java',
            description: 'Learn Java and build modern web applications.',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305131111/Java-programming.png',
            link: '/courses/angular'
        },
        {
            title: 'PostgresSQL',
            description: 'Learn PostgresSQL and build web applications.',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222194931/PostgreSQL-Tutorial.png',
            link: '/courses/django'
        }
    ]

    return (
        <div className='font-poppins' >
            <div className='flex flex-col items-center justify-center mb-10' >
                <TitleThemeFormat title='Recommended for Web Developer' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5' >
                {courses.map((course) => (
                    <CoursesCard
                        key={course.title}
                        description={course.description}
                        image={course.image}
                        title={course.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecommendForWebDev