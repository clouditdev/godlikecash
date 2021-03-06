import { motion } from "framer-motion"
import { useState } from "react";
import { Close, GodlikeCash, Menu, Partnership, Question, SettingsIcon, Shield, Tg, Vk, Yt } from "../icons/Icons";
import { User } from "./User";

export function MobMenu() {
    const [menu, setMenu] = useState(false)
    return (
        <div className="flex z-50">
            <button className="transition-color duration-300 rounded-l-md" onClick={() => setMenu(true)}>
                <div className="mx-4 my-4">
                    <Menu />
                </div>
            </button>
            <div className={menu ? "bg-[#262230] h-full w-80 transition-translate duration-500 fixed left-0 z-50 rounded-r-md border-r border-[#383a41] bg-opacity-60 backdrop-blur-md" : 'bg-[#22252D] h-full w-80 transition-translate duration-500 fixed left-0 z-50 -translate-x-96 rounded-r-md border-r border-[#383a41] bg-opacity-60 backdrop-blur-md'}>
                <div className="flex h-full justify-between flex-col">
                    <div className="flex flex-col">
                        <div className='flex flex-nowrap px-4 py-4 justify-between'>
                            <div className="flex flex-nowrap">
                                <div className="h-9 w-9">
                                    <GodlikeCash />
                                </div>
                                <p className='text-white font-bold text-2xl mt-1 ml-1'>Godlike</p>
                                <p className='text-[#F8526E] font-bold text-2xl mt-1'>Cash</p>
                            </div>
                            <div className="flex flex-nowrap justify-between">
                                <div className="mt-1">
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} onClick={() => setMenu(false)} className="bg-[#393A4F] py-1 px-1 rounded-md fill-[#6B7A99] hover:fill-white transition-colors duration-300 shadow-xl">
                                        <Close />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                            <User />
                        <div className="flex flex-nowrap py-1 px-4">
                            <div className='flex flex-nowrap text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 fill-gray-400 hover:fill-[#F8526E]'>
                                <Shield />
                                <p className='font-bold ml-2'>
                                    ?????????????? ????????
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap py-4 px-4">
                            <div className='flex flex-nowrap text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 fill-gray-400 hover:fill-[#F8526E]'>
                                <Question />
                                <p className='font-bold ml-2'>
                                    F.A.Q & ??????????????????
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap py-1 px-4">
                            <div className='flex flex-nowrap text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 fill-gray-400 hover:fill-[#F8526E]'>
                                <Partnership />
                                <p className='font-bold ml-2'>
                                    ??????????????????????
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap py-4 px-4">
                            <div className='flex flex-nowrap text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 fill-gray-400 hover:fill-[#F8526E]'>
                                <SettingsIcon />
                                <p className='font-bold ml-2'>
                                    ??????????????????
                                </p>
                            </div>
                        </div>
                        <p className='flex mx-4 border-b border-[#6B7A99]' />
                        <div className="flex flex-col">
                            <p className="text-sm text-[#626572] font-semibold mx-4 mt-4">
                                ???????????????????????????????? ????????????????????
                            </p>
                            <p className="text-sm text-[#626572] font-semibold mx-4 mt-4">
                                ?????????? COOKIES
                            </p>
                            <p className="text-sm text-[#626572] font-semibold mx-4 mt-4">
                                ???????????????? ????????????????????????????????????
                            </p>
                            <p className="text-sm text-[#626572] font-semibold mx-4 mt-4">
                                ????????????????
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-nowrap px-4 py-4 justify-center'>
                            <div className='fill-[#6B7A99] hover:fill-[#F8526E] cursor-pointer transition-colors duration-300 mr-4'>
                                <Vk />
                            </div>
                            <div className='fill-[#6B7A99] hover:fill-[#F8526E] cursor-pointer transition-colors duration-300 mr-4'>
                                <Tg />
                            </div>
                            <div className='fill-[#6B7A99] hover:fill-[#F8526E] cursor-pointer transition-colors duration-300'>
                                <Yt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}