import { Slots, Mines, Crown, GodlikeCash, Partnership, Question, Roulette, Shield, Tg, Vk, Yt } from '../icons/Icons';
import { Authen } from './Authen';
import { Settings } from './Settings';
import { useRouter } from "next/router";
import Link from 'next/link';

const Header = () => {
    const { pathname } = useRouter();
    return (
        <div className='flex flex-col absolute invisible md:fixed bg-[#262230] -top-80 -left-80 md:top-0 md:left-0 md:visible z-50'>
            <p className='flex w-screen border-b border-[#6B7A99]' />
            <div className='flex flex-nowrap w-screen justify-between'>
                <div className='flex flex-nowrap'>
                    <Link href="/" passHref>
                    <div className='flex flex-nowrap px-4 py-4 cursor-pointer'>
                        <div className="h-9 w-9">
                            <GodlikeCash />
                        </div>
                        <p className='text-white font-bold text-2xl mt-1 ml-1'>Godlike</p>
                        <p className='text-[#F8526E] font-bold text-2xl mt-1'>Cash</p>
                    </div>
                    </Link>
                    <Link href="/crash" passHref>
                        <div className={pathname === "/crash" ? 'flex flex-nowrap text-white transition-colors duration-200 border-b-2 border-[#F8526E] cursor-pointer ml-4 fill-[#F8526E]' : 'flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#F8526E] cursor-pointer ml-4 fill-[#6B7A99] hover:fill-[#F8526E]'}>
                            <div className='py-5'>
                                <div className='flex flex-nowrap border-r border-[#6B7A99]'>
                                    <div className='mx-4 h-6 w-6 mt-1'>
                                        <Slots />
                                    </div>
                                    <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                        SLOTS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/double" passHref>
                        <div className={pathname === "/double" ? 'flex flex-nowrap text-white transition-colors duration-200 border-b-2 border-[#F8526E] cursor-pointer fill-[#F8526E]' : 'flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#F8526E] cursor-pointer fill-[#6B7A99] hover:fill-[#F8526E]'}>
                            <div className='py-5'>
                                <div className='flex flex-nowrap border-r border-[#6B7A99]'>
                                    <div className='mx-4 h-6 w-6'>
                                        <Roulette />
                                    </div>
                                    <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                        LIVE GAME
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/jackpot" passHref>
                        <div className={pathname === "/jackpot" ? 'flex flex-nowrap text-white transition-colors duration-200 border-b-2 border-[#F8526E] cursor-pointer fill-[#F8526E]' : 'flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#F8526E] cursor-pointer fill-[#6B7A99] hover:fill-[#F8526E]'}>
                            <div className='py-5'>
                                <div className='flex flex-nowrap'>
                                    <div className='mx-4 h-7 w-7'>
                                        <Crown />
                                    </div>
                                    <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                        ESPORT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/mines" passHref>
                        <div className={pathname === "/mines" ? 'flex flex-nowrap text-white transition-colors duration-200 border-b-2 border-[#F8526E] cursor-pointer fill-[#F8526E]' : 'flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#F8526E] cursor-pointer fill-[#6B7A99] hover:fill-[#F8526E]'}>
                            <div className='py-5'>
                                <div className='flex flex-nowrap border-l border-[#6B7A99]'>
                                    <div className='mx-4 h-6 w-6 mt-1'>
                                        <Mines />
                                    </div>
                                    <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                        ALL GAMES
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-nowrap'>
                    <div>
                        <Settings />
                    </div>
                    <Authen />
                </div>
            </div>
            <p className='flex w-screen border-b border-[#6B7A99]' />
        </div>
    )
}

export default Header;