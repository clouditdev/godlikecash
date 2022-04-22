import React from 'react'
import { Authen } from './Authen'
import { MobMenu } from './MobMenu'

export const MobileHeader = () => {
  return (
    <div flex className='flex flex-col w-screen relative visible md:absolute top-0 left-0 md:-top-80 md:-left-80 md:invisible'>
        <div className='flex flex-nowrap w-full justify-between'>
            <div className='mx-4 fill-[#969CB2]'>
                <MobMenu />
            </div>
            <div>
                <Authen />
            </div>
        </div>
        <p className='flex w-screen border-b border-[#6B7A99]' />
    </div>
  )
}
