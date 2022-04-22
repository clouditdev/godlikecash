import React from 'react'
import { SignOut, Steam } from '../icons/Icons'
import { useSession, signIn, signOut } from "next-auth/react"
import {Donate} from './Donate'
import Image from 'next/image'

export const Authen = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className='flex flex-nowrap'>
                <div>
                    <Donate />
                </div>
                <div className='w-10 h-10 py-4 mr-4 md:relative absolute md:visible invisible'>
                    <Image width={40} height={40} className='rounded-md' src={session.user.image} alt="" />
                </div>
                <div>
                    <button className='bg-[#2E2F40] hover:bg-[#383a4e] py-2 px-2 rounded-md cursor-pointer my-4 mr-4 transition-colors duration-200 fill-[#6B7A99] hover:fill-white' onClick={() => signOut()}>
                        <SignOut />
                    </button>
                </div>
            </div>
        )
      }
    return (
        <div>
            <button onClick={() => signIn()} className='flex flex-nowrap text-[#6B7A99] hover:text-white bg-gradient-to-b from-[#46475B] to-[#343544] rounded-md py-2 px-4 fill-[#6B7A99] hover:fill-white my-4 mr-3 cursor-pointer transition-colors duration-200'>
                <Steam />
                <p className='font-bold ml-2'>
                    ВОЙТИ
                </p>
            </button>
        </div>
    )
}