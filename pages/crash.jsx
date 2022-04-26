import Image from 'next/image';
import React from 'react'
import { Xblue } from '../components/Crash/Xblue';
import { Xgold } from '../components/Crash/Xgold';
import { Xgray } from '../components/Crash/Xgray';
import { Xpurple } from '../components/Crash/Xpurple';
import MainLayout from '../components/MainComponents/MainLayount'
import { Line } from 'rc-progress';
import { Delete } from '../components/icons/Icons';
import { motion } from "framer-motion"
import { BetInput } from '../components/Crash/BetInput';
import { MobBetInput } from '../components/Crash/MobBetInput';

const Crash = () => {
    return (
        <MainLayout>
            <div className='flex flex-col w-full z-10 mt-16 md:mt-32'>
                <div className='flex flex-nowrap overflow-hidden my-4 mx-2 z-10'>
                    <Xblue x="1.42" />
                    <Xgray x="1.02" />
                    <Xpurple x="2.36" />
                    <Xpurple x="2.01" />
                    <Xgold x="10.28" />
                    <Xblue x="1.62" />
                    <Xblue x="1.98" />
                    <Xgold x="13.62" />
                    <Xgold x="15.85" />
                    <Xblue x="1.42" />
                    <Xgray x="1.02" />
                    <Xpurple x="2.36" />
                    <Xpurple x="2.01" />
                    <Xgold x="10.28" />
                    <Xblue x="1.62" />
                    <Xblue x="1.98" />
                    <Xgold x="13.62" />
                    <Xgold x="15.85" />
                    <Xblue x="1.62" />
                    <Xblue x="1.98" />
                    <Xgold x="13.62" />
                    <Xgold x="15.85" />
                    <Xblue x="1.42" />
                    <Xpurple x="2.36" />
                    <Xpurple x="2.01" />
                    <Xgold x="10.28" />
                    <Xblue x="1.62" />
                    <Xblue x="1.98" />
                    <Xgold x="13.62" />
                    <Xgold x="15.85" />
                    <Xblue x="1.62" />
                </div>
                <div className='flex justify-center z-10'>
                    <div className='flex lg:ml-40'>
                    <Image width={598} height={339} src="/bomb.png" alt="Bomb/Crash" />
                    </div>
                    <video className='mt-36 absolute lg:relative invisible lg:visible -top-96 -left-96 md:top-0 md:left-0' autoPlay muted loop playsinline>
                        <source src="/Gaben.webm" type="video/webm" />
                        <source src="video.mov" type="video/quicktime" />
                    </video>
                </div>
                <div className='flex w-full justify-center'>
                    <Line className='md:w-3/4 h-2 rounded-full mx-4' percent="50" strokeColor="#F1AD0A" />
                </div>
                <div className='flex w-full justify-center my-4 z-20'>
                    <div className='flex w-full justify-center'>
                        <div className='flex md:flex-nowrap w-full md:w-3/4 mx-4 justify-between absolute invisible md:relative md:visible -top-80 -left-80 md:top-0 md:left-0'>
                            <BetInput />
                            <div className='flex flex-nowrap bg-[#1E1E28] h-14 w-80 justify-between rounded-md py-3 mr-2'>
                                <div className='flex flex-nowrap'>
                                    <p className='text-white py-1 px-2 ml-2'>
                                        X
                                    </p>
                                    <input placeholder="2" className='w-10 focus:outline-none bg-[#1E1E28] text-white font-semibold text-xl mx-2' type="number" />
                                </div>
                                <div className='flex flex-nowrap mr-2'>
                                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#2C3037] rounded-md py-2 px-2 fill-[#6B7A99] mr-1 cursor-pointer'>
                                        <Delete />
                                    </motion.div>
                                    <motion.p whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                                        +0.1
                                    </motion.p>
                                    <motion.p whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                                        +1
                                    </motion.p>
                                </div>
                            </div>
                            <div className='flex flex-nowrap bg-[#1E1E28] h-14 w-full rounded-md py-3 justify-end'>
                                <p className=' py-1 px-2 mr-2 bg-[#6B7A99] rounded-md cursor-pointer'>
                                    ИНВЕНТАРЬ
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full md:w-3/4 mx-4 justify-between relative visible md:absolute md:invisible'>
                            <MobBetInput />
                            <div className='flex flex-nowrap bg-[#1E1E28] h-14 w-full justify-between rounded-md py-3 mr-2 my-2'>
                                <div className='flex flex-nowrap'>
                                    <p className='text-gray-400 py-1 px-2 ml-2'>
                                        X
                                    </p>
                                    <input placeholder="2" className='w-10 focus:outline-none bg-[#1E1E28] text-white font-semibold text-xl mx-2' type="number" />
                                </div>
                                <div className='flex flex-nowrap mr-2'>
                                    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#2C3037] rounded-md py-2 px-2 fill-[#6B7A99] mr-1 cursor-pointer'>
                                        <Delete />
                                    </motion.div>
                                    <motion.p whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                                        +0.1
                                    </motion.p>
                                    <motion.p whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                                        +1
                                    </motion.p>
                                </div>
                            </div>
                            <div className='flex flex-nowrap bg-[#1E1E28] h-14 w-full rounded-md py-3 justify-end'>
                                <p className=' py-1 px-2 mr-2 bg-[#6B7A99] rounded-md cursor-pointer'>
                                    ИНВЕНТАРЬ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='flex bg-[#393A4F] md:w-3/4 w-full mx-4 rounded-md mb-2'>
                        <p className='text-center w-full text-[#6B7589] font-semibold text-xl py-3'>
                            ОЖИДАНИЕ НАЧАЛА РАУНДА
                        </p>
                    </div>
                </div>
                <div className='flex w-full mb-36 justify-center'>
                    <div className='flex w-full md:w-3/4'>
                        <div className='flex flex-nowrap bg-[#393A4F] w-full rounded-md justify-center ml-4 md:ml-0'>
                            <div className='my-4 h-7 w-7'>
                                <Image src="/bank-icon.png" width={43} height={40} alt="Coins" />
                            </div>
                            <div className='flex flex-col py-2 ml-2'>
                                <p className='text-center w-full text-white font-semibold md:text-lg'>
                                    БАНК
                                </p>
                                <p className='text-center w-full text-[#F0AC0A] font-bold md:text-2xl'>
                                    0.00
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap bg-[#393A4F] w-full rounded-md justify-center mx-1 md:mx-2'>
                            <div className='my-4 h-7 w-7'>
                                <Image src="/bank-icon.png" width={43} height={40} alt="Coins" />
                            </div>
                            <div className='flex flex-col py-2 ml-2'>
                                <p className='text-center w-full text-white font-semibold md:text-lg'>
                                    БАНК
                                </p>
                                <p className='text-center w-full text-[#F0AC0A] font-bold md:text-2xl'>
                                    0.00
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap bg-[#393A4F] w-full rounded-md justify-center mr-4 md:mr-0'>
                            <div className='my-4 h-7 w-7'>
                                <Image src="/bank-icon.png" width={43} height={40} alt="Coins" />
                            </div>
                            <div className='flex flex-col py-2 ml-2'>
                                <p className='text-center w-full text-white font-semibold md:text-lg'>
                                    БАНК
                                </p>
                                <p className='text-center w-full text-[#F0AC0A] font-bold md:text-2xl'>
                                    0.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='object-cover absolute w-screen z-0' src="/background.png" alt="" />
            </div>
        </MainLayout>
    )
}

export default Crash;