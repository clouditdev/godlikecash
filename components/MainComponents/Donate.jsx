import { Close, Wallet } from "../icons/Icons"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { PaymentCard } from "./PaymentCard";
import Link from "next/link";

export const Donate = () => {
    const [settings, setDonate] = useState(false)
    return (
        <div>
            <div className="flex flex-nowrap">
                <div>
                    <div className="bg-[#1D1E28] py-2 px-2 rounded-l-md cursor-pointer my-4 border-y border-l border-[#454f61]">
                        <p className="text-white font-bold">
                            0.00
                        </p>
                    </div>
                </div>
                <button onClick={() => setDonate(true)} className='bg-gradient-to-b from-[#F4B206] to-[#DD8B21] py-2 px-2 rounded-r-md cursor-pointer my-4 mr-4 transition-colors duration-200 fill-[#723A1B] text-[#723A1B] font-bold'>
                    <div className="flex flex-nowrap">
                        <div>
                            <Wallet />
                        </div>
                        <p className="md:visible invisible md:relative absolute">
                            ДЕПОЗИТ
                        </p>
                    </div>
                </button>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {settings ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} exit={{ opacity: 0, transition: { duration: 0.3 } }} className="fixed top-0 left-0 md:pt-40 visible w-screen text-white transition-colors duration-300 h-screen bg-black bg-opacity-30 shadow-2xl z-40">
                        <div className="flex justify-center">
                            <div className="flex flex-col bg-[#2E2F40] px-2 md:px-5 rounded-md shadow-xl">
                                <div className="flex flex-nowrap md:w-full justify-between mx-5">
                                    <p className="my-4">
                                        ПОПОЛНЕНИЕ БАЛАНСА
                                    </p>
                                    <div className="my-4">
                                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} onClick={() => setDonate(false)} className="bg-[#393A4F] py-1 px-1 rounded-md fill-[#6B7A99] hover:fill-white transition-colors duration-300 md:mx-4">
                                            <Close />
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-nowrap flex-wrap justify-center">
                                        <PaymentCard img="/payments/qiwi.svg" min="1" />
                                        <PaymentCard img="/payments/iomoney.svg" min="1.25" />
                                        <PaymentCard img="/payments/credit-cards.svg" min="1" />
                                        <PaymentCard img="/payments/mir.svg" min="1" />
                                    </div>
                                    <div className="flex md:flex-nowrap flex-wrap justify-center">
                                        <PaymentCard img="/payments/visa.svg" min="1" />
                                        <PaymentCard img="/payments/master-card.svg" min="1" />
                                        <PaymentCard img="/payments/skinify.png" min="1" />
                                    </div>
                                    <div className="flex flex-nowrap mt-20">
                                        <div className="mx-2 my-4">
                                            <input placeholder="1$" type="number" className="block p-2 w-28 text-gray-400 bg-[#242533] rounded-md sm:text-md focus:outline-none" />
                                        </div>
                                        <div className="flex flex-nowrap bg-gradient-to-b from-[#F4B206] to-[#DD8B21] h-10 rounded-md px-4 mt-4 ml-2 fill-[#723A1B] text-[#723A1B] hover:shadow-xl">
                                            <div className="mt-1">
                                                <Wallet />
                                            </div>
                                            <Link href="https://pay.freekassa.ru/?m=312&oa=1000&i=&currency=RUB&em=&phone=&o=123&pay=PAY&s=e723c585cb601241c5bb5727efa16b08" passHref>
                                                <button className="font-bold">
                                                    ПОПОЛНИТЬ
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div> : null
                }
            </AnimatePresence>
        </div>
    )
}