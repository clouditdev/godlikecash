import Link from "next/link";
import { useRouter } from "next/router";
import { Slots, Roulette, Mines, Crown } from "../icons/Icons";

export const MobNav = () => {
    const { pathname } = useRouter();
    return (
        <div className='flex fixed flex-nowrap justify-between w-screen bg-[#262230] bg-opacity-60 backdrop-blur-md drop-shadow-md shadow-xl rounded-t-md border-t border-[#383a41] md:invisible md:absolute bottom-0 z-40 md:-top-96 md:-left-96'>
            <Link href="/crash" passHref>
                <div className={pathname === "/crash" ? "flex flex-col py-2 ml-7 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col py-2 ml-7 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-6 w-6 mx-2 my-1">
                        <Slots />
                    </div>
                    <p className="text-sm mt-1">
                        SLOTS
                    </p>
                </div>
            </Link>
            <Link href="/double" passHref>
                <div className={pathname === "/double" ? "flex flex-col py-2 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col py-2 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-7 w-7 ml-5 mb-1">
                        <Roulette />
                    </div>
                    <p className="text-sm mt-1">
                        LIVE&nbsp;GAME
                    </p>
                </div>
            </Link>
            <Link href="/mines" passHref>
                <div className={pathname === "/mines" ? "flex flex-col py-2 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col py-2 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-7 w-7 ml-6 mt-1">
                        <Mines/>
                    </div>
                    <p className="text-sm mt-1">
                        ALL&nbsp;GAMES
                    </p>
                </div>
            </Link>
            <Link href="/jackpot" passHref>
                <div className={pathname === "/jackpot" ? "flex flex-col py-2 mb-4 mr-7 fill-[#4DA6FF] text-white" : "flex flex-col py-2 mb-4 mr-7 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-8 ml-2 w-8">
                        <Crown />
                    </div>
                    <p className="text-sm mt-1">
                        ESPORT
                    </p>
                </div>
            </Link>
        </div>
    )
}
