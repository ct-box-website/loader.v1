import React from 'react'
import Logo from '@/components/assets/Logo'
import Image from 'next/image'
import TextInput from '@/components/ui/TextInput'
import { FaLock, FaUser } from 'react-icons/fa'
import Button from '@/components/ui/Button'

const google = '/svg-icon/google.svg'
const Regster = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1' >
            {/* Form */}
            <div
                className='font-poppins flex flex-col justify-center lg:p-16 xl:px-36 md:px-36 p-10 gap-y-4'
            >
                <Logo />

                <p className='text-secondary font-semibold text-xl' >Register</p>
                <button className='
                flex flex-row items-center gap-x-4 border justify-center p-2 rounded-md bg-slate-50
                ' >
                    <Image src={google} alt="Google" width={24} height={24} />
                    Sign in with Google
                </button>
                <p className='text-center' >or</p>
                <div className='flex flex-row items-center justify-between gap-x-5' >
                    <div className='flex flex-col flex-1' >
                        <label htmlFor="">First name</label>
                        <TextInput
                            Icon={FaUser}
                        />
                    </div>
                    <div className='flex flex-col flex-1' >
                        <label htmlFor="">Last name</label>
                        <TextInput
                            Icon={FaUser}
                        />
                    </div>
                </div>

                <div className='flex flex-col' >
                    <label htmlFor="">Email</label>
                    <TextInput
                        type='email'
                    />
                </div>

                <div className='flex flex-col' >
                    <label htmlFor="">Password</label>
                    <TextInput
                        type='password'
                        Icon={FaLock}
                    />
                </div>
                <Button
                    title='Register'
                />
                <p className='text-center text-sm' >Already have an account? <a href='/login' className='text-secondary font-medium' >Login</a></p>

            </div>
            <div className='hidden lg:block' >
                <video
                    width={"100%"}
                    height={"90%"}
                    controls={false}
                    preload='none'
                    autoPlay={true}
                    loop
                    muted
                    className='h-screen object-cover'
                >
                    <source src='/video/login.mp4' type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Regster