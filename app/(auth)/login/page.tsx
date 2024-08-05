import React from 'react'
import Logo from '@/components/assets/Logo'
import Image from 'next/image'
import TextInput from '@/components/ui/TextInput'
import { FaLock } from 'react-icons/fa'
import Button from '@/components/ui/Button'

const google = '/svg-icon/google.svg'
const LoginPage = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1' >
            {/* Form */}
            <div
                className='font-poppins flex flex-col justify-center lg:px-16 xl:px-36 md:px-36 p-10 gap-y-4'
            >
                <Logo />

                <p className='text-secondary font-semibold text-xl' >Login</p>
                <button className='
                flex flex-row items-center gap-x-4 border justify-center p-2 rounded-md bg-slate-50
                ' >
                    <Image src={google} alt="Google" width={24} height={24} />
                    Sign in with Google
                </button>
                <p className='text-center' >or</p>
                <div className='flex flex-col' >
                    <label htmlFor="">Email</label>
                    <TextInput
                    />
                </div>

                <div className='flex flex-col' >
                    <label htmlFor="">Password</label>
                    <TextInput
                        type='password'
                        Icon={FaLock}
                    />
                </div>
                <div className='flex flex-row items-center justify-between' >
                    <div className='flex flex-row items-center' >
                        <input type='checkbox' id='remember' className='mr-2' />
                        <label htmlFor='remember'>Remember me</label>
                    </div>
                    <a href='#'>Forgot password?</a>
                </div>
                <Button
                    title='Login'
                />
                <p className='text-center text-sm' >Don&apos;t have an account? <a href='/register' className='text-secondary font-medium' >Sign up</a></p>

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

export default LoginPage