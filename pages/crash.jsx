import Image from 'next/image';
import React from 'react'
import { Xblue } from '../components/Crash/Xblue';
import { Xgold } from '../components/Crash/Xgold';
import { Xgray } from '../components/Crash/Xgray';
import { Xpurple } from '../components/Crash/Xpurple';
import MainLayout from '../components/MainComponents/MainLayount'

const Crash = () => {
    return (
        <MainLayout>
            <div className='flex flex-col w-screen'>
                <div className='flex flex-nowrap overflow-hidden my-4 mx-2 z-20'>
                <Xblue x="1.42"/>
                <Xgray x="1.02"/>
                <Xpurple x="2.36"/>
                <Xpurple x="2.01"/>
                <Xgold x="10.28"/>
                <Xblue x="1.62"/>
                <Xblue x="1.98"/>
                <Xgold x="13.62"/>
                <Xgold x="15.85"/>
                <Xblue x="1.42"/>
                <Xgray x="1.02"/>
                <Xpurple x="2.36"/>
                <Xpurple x="2.01"/>
                <Xgold x="10.28"/>
                <Xblue x="1.62"/>
                <Xblue x="1.98"/>
                <Xgold x="13.62"/>
                <Xgold x="15.85"/>
                <Xblue x="1.62"/>
                <Xblue x="1.98"/>
                <Xgold x="13.62"/>
                <Xgold x="15.85"/>
                <Xblue x="1.42"/>
                <Xpurple x="2.36"/>
                <Xpurple x="2.01"/>
                <Xgold x="10.28"/>
                <Xblue x="1.62"/>
                <Xblue x="1.98"/>
                <Xgold x="13.62"/>
                <Xgold x="15.85"/>
                <Xblue x="1.62"/>
                </div>
                <div className='flex justify-center z-20 w-full'>
                    <Image width={598} height={339} src="/bomb.png"/>
                </div>
                <img className='object-cover w-full absolute z-0' src="/background.png" alt="" />
            </div>
        </MainLayout>
    )
}

export default Crash;