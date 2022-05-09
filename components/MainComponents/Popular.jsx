import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

const Popular = () => {
    const games = [
        { id: 1, img: "/images/games/0fe9cf6d5c6ce32f0b10980bfacd4d57.png", name: "Queen of the Sun", provider: "Booongo", send: "/slots/infin-queenofthesun", },
        { id: 2, img: "/images/games/01d7ac3d16f999fcdca05917e418107a.png", name: "Money Train 2", provider: "Relax Gaming", send: "/slots/relax-moneytrain2", },
        { id: 3, img: "/images/games/74847fd0c2f1eb89e6cbdf39e2245268.png", name: "The Dog House Megaways", provider: "Pragmatic Play", send: "/slots/pragmaticexternal-thedoghousemegaways1",},
        { id: 4, img: "/images/games/e8afe2e3d3359a83cd509d20b4d92b6e.png", name: "Lucky Lady Moon", provider: "BGaming", send: "/slots/softswiss-luckyladymoon-mode=fun", },
    ]
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col justify-center mx-2 md:mx-0 w-full md:w-3/4">
                <div className="flex flex-nowrap">
                <div className="flex">
                <p className="text-[#F8526E] text-xl py-2 px-4 mb-4 mt-6 bg-[#312838] rounded-full">
                    Популярные
                </p>
                </div>
                <div className="w-full ml-4 mt-11 border-t border-[#32303A]" />
                </div>
                <div className="flex flex-wrap justify-center cursor-pointer">
                    {games.map(game =>
                        <div key={game.id} className="flex flex-col mb-2 mr-2">
                            <Link href={{pathname: game.send}}>
                                <motion.div whileHover={{y: -5}} whileTap={{y: 2}}>
                                <Image height="150" width="230" className="rounded-lg" src={game.img} alt="" />
                                </motion.div>
                            </Link>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <Link href="">
                                        <p className="text-white hover:text-[#F8526E] transition-colors duration-300">
                                            {game.name}
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex">
                                    <Link href="">
                                        <p className="text-gray-600 hover:text-gray-500 text-sm transition-colors duration-300">
                                            {game.provider}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular