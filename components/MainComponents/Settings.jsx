import { Close, SettingsIcon } from "../icons/Icons"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

export const Settings = () => {
    const [settings, setSettings] = useState(false)
    return (
        <div>
            <button onClick={() => setSettings(true)} className='bg-[#2E2F40] hover:bg-[#383a4e] py-2 px-2 rounded-md cursor-pointer my-4 mx-4 transition-colors duration-200 fill-[#6B7A99] hover:fill-white'>
                <div>
                    <SettingsIcon />
                </div>
            </button>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {settings ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0, transition: { duration: 0.3 } }} className="fixed top-0 left-0 pt-60 visible w-screen text-white transition-colors duration-300 h-screen bg-black bg-opacity-30 shadow-2xl drop-shadow-xl">
                        <div className="flex justify-center">
                            <div className="flex flex-col bg-[#2E2F40] px-5 rounded-md">
                                <div className="flex flex-nowrap justify-between">
                                    <p className="font-semibold mr-24 mt-1 py-5">
                                        НАСТРОЙКИ
                                    </p>
                                    <div className="mt-6">
                                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} onClick={() => setSettings(false)} className="bg-[#393A4F] py-1 px-1 rounded-md fill-[#6B7A99] hover:fill-white transition-colors duration-300">
                                            <Close />
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="bg-[#242533] rounded-md mb-2">
                                    <p className="text-gray-400 font-semibold mx-4 my-4">
                                        Звуки сайта
                                    </p>
                                </div>
                                <div className="bg-[#242533] rounded-md mb-4">
                                    <p className="text-gray-400 font-semibold mx-4 my-4">
                                        Эффекты сайта
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div> : null
                }
            </AnimatePresence>
        </div>
    )
}