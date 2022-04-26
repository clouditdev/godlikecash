import { motion } from "framer-motion"
import { Delete } from "../icons/Icons"
import { useState } from "react"

export const MobBetInput = () => {
    const [Mob, setMob] = useState(0)
    return (
        <div className='flex flex-nowrap bg-[#1E1E28] w-full h-14 rounded-md py-3 md:mr-2 justify-between'>
            <input placeholder="0,00" className='w-16 focus:outline-none bg-[#1E1E28] text-white font-semibold text-xl mx-10' type="text" value={Mob} />
            <div className='flex flex-nowrap mr-2'>
                <motion.button onClick={() => setMob(0)} whileTap={{ y: 1 }} className='bg-[#2C3037] rounded-md py-2 px-2 fill-[#6B7A99] mr-1 cursor-pointer'>
                    <Delete />
                </motion.button>
                <motion.button onClick={() => setMob(Mob + 0.1)} whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                    +0.1
                </motion.button>
                <motion.button onClick={() => setMob(Mob + 1)} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                    +1
                </motion.button>
                <motion.button onClick={() => setMob(Mob * 2)} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-2 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                    x2
                </motion.button>
                <motion.button whileHover={{ y: -2 }} whileTap={{ y: 1 }} className='bg-[#6B7A99] hover:bg-[#7B8CB0] transition-colors duration-300 px-1 py-2 rounded-md text-sm mr-1 cursor-pointer'>
                    max
                </motion.button>
            </div>
        </div>
    )
}
