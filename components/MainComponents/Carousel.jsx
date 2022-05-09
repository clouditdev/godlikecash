import { motion } from 'framer-motion'
import React from 'react'
import CarouselButton from '../UI/CarouselButton'

const Carousel = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex mx-4 w-full md:w-3/4 mt-24 md:mt-28 mb-10 justify-center rounded-lg shadow-xl">
                <div className="flex absolute w-3/4 flex-nowrap justify-between">
                    <div className="flex flex-col z-40 mx-4 lg:mx-0">
                        <p className="z-40 font-extrabold mt-4 lg:mt-8 lg:ml-16 text-xl lg:text-3xl text-[#F8526E] drop-shadow-md">
                            BONUS PACK
                        </p>
                        <p className="z-40 md:w-3/4 md:mt-5 lg:ml-16 text-sm lg:text-xl text-gray-400 drop-shadow-md">
                            До $1000 БОНУСОМ и 50 БЕСПЛАТНЫХ СПИНОВ на ваш первый депозит.
                        </p>
                        <div className="lg:ml-16 z-40">
                            <CarouselButton />
                        </div>
                    </div>
                    <img draggable="false" className="flex h-40 lg:h-60 z-30 rounded-r-lg select-none md:visible invisible absolute md:relative" src="/images/carousel/imgbin_online-gambling-online-casino-game-png.png" alt="" />
                </div>
                <div className="flex absolute h-40 lg:h-60 w-full justify-center">
                    <div className="flex bg-gradient-to-t z-30 from-[#f8526e59] via-[#f8526e28] to-[#f8526e00] w-full mx-4 md:w-3/4 h-40 lg:h-60 rounded-lg opacity-70" />
                </div>
                <img draggable="false" className="w-full h-40 lg:h-60 object-cover rounded-lg filter brightness-50 select-none z-20" src="/images/carousel/bg.webp" alt="" />
            </div>
            <div className="flex absolute h-60 lg:h-80 w-full mt-16 pt-3">
                    <motion.img initial={{ opacity: 0, rotate: -45, scale: 0.5, x: -100, y: 100 }} transition={{ delay: 0.5, duration: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1, x: 0, y: 0 }} draggable="false" className="select-none absolute z-30 h-40 lg:h-72 pt-5 invisible lg:visible" src="/images/carousel/girl2.png" alt="" />
                <div className="bg-[#262230] h-52 md:h-full w-full md:mt-0 absolute z-20 opacity-90" />
                <img draggable="false" className="object-cover h-52 md:h-full w-full z-10" src="/images/carousel/4564132189.jpg" alt="" />
            </div>
        </div>
    )
}

export default Carousel