import Link from "next/link";
import { useRouter } from "next/router";
import { Bomb, Roulette, Coinflip, Crown } from "../icons/Icons";

export const MobNav = () => {
    const { pathname } = useRouter();
    return (
        <div className='flex fixed flex-nowrap justify-between w-screen bg-[#22252D] bg-opacity-60 backdrop-blur-md drop-shadow-md shadow-xl rounded-t-md border-t border-[#383a41] md:invisible md:absolute bottom-0 z-30 md:-top-96 md:-left-96'>
            <Link href="/crash">
                <div className={pathname === "/crash" ? "flex flex-col px-4 py-2 ml-7 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col px-4 py-2 ml-7 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-8 w-8 mx-2">
                        <Bomb />
                    </div>
                    <p className="text-sm mt-1">
                        CRASH
                    </p>
                </div>
            </Link>
            <Link href="/double">
                <div className={pathname === "/double" ? "flex flex-col px-4 py-2 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col px-4 py-2 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-8 w-8 mx-2">
                        <Roulette />
                    </div>
                    <p className="text-sm mt-1">
                        DOUBLE
                    </p>
                </div>
            </Link>
            <Link href="/coinflip">
                <div className={pathname === "/coinflip" ? "flex flex-col px-4 py-2 mb-4 fill-[#4DA6FF] text-white" : "flex flex-col px-4 py-2 mb-4 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-8 w-8 mx-3">
                        <Coinflip />
                    </div>
                    <p className="text-sm mt-1">
                        COINFLIP
                    </p>
                </div>
            </Link>
            <Link href="/jackpot">
                <div className={pathname === "/jackpot" ? "flex flex-col px-4 py-2 mb-4 mr-7 fill-[#4DA6FF] text-white" : "flex flex-col px-4 py-2 mb-4 mr-7 fill-[#6B7A99] text-[#6B7A99]"}>
                    <div className="h-8 w-8 mx-3">
                        <Crown />
                    </div>
                    <p className="text-sm mt-1">
                        JACKPOT
                    </p>
                </div>
            </Link>
        </div>
    )
}
