import { Bomb, Coinflip, Crown, GodlikeCash, Partnership, Question, Roulette, Shield, Tg, Vk, Yt } from '../icons/Icons';
import { Authen } from './Authen';
import { Settings } from './Settings';

const Header = () => {
    return (
        <div className='flex flex-col absolute invisible md:relative -top-80 -left-80 md:top-0 md:left-0 md:visible'>
            <div className="flex w-screen justify-between">
                <div className='flex flex-nowrap'>
                    <div className="flex flex-nowrap py-4 px-4">
                        <div className='flex flex-nowrap text-[#6B7A99] hover:text-white cursor-pointer transition-colors duration-300 fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                            <Shield />
                            <p className='font-bold ml-2'>
                                ЧЕСТНАЯ ИГРА
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-nowrap py-4 px-4">
                        <div className='flex flex-nowrap text-[#6B7A99] hover:text-white cursor-pointer transition-colors duration-300 fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                            <Question />
                            <p className='font-bold ml-2'>
                                F.A.Q & ПОДДЕРЖКА
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-nowrap py-4 px-4">
                        <div className='flex flex-nowrap text-[#6B7A99] hover:text-white cursor-pointer transition-colors duration-300 fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                            <Partnership />
                            <p className='font-bold ml-2'>
                                ПАРТНЕРСТВО
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-nowrap px-4 py-4'>
                    <div className='fill-[#6B7A99] hover:fill-[#4DA6FF] cursor-pointer transition-colors duration-300 mr-4'>
                        <Vk />
                    </div>
                    <div className='fill-[#6B7A99] hover:fill-[#4DA6FF] cursor-pointer transition-colors duration-300 mr-4'>
                        <Tg />
                    </div>
                    <div className='fill-[#6B7A99] hover:fill-[#4DA6FF] cursor-pointer transition-colors duration-300'>
                        <Yt />
                    </div>
                </div>
            </div>
            <p className='flex w-screen border-b border-[#6B7A99]' />
            <div className='flex flex-nowrap w-screen justify-between'>
                <div className='flex flex-nowrap'>
                    <div className='flex flex-nowrap px-4 py-4'>
                        <div className="h-9 w-9"> 
                            <GodlikeCash />
                        </div>
                        <p className='text-white font-bold text-2xl mt-1 ml-1'>Godlike</p>
                        <p className='text-[#4DA6FF] font-bold text-2xl mt-1'>Cash</p>
                    </div>
                    <div className='flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#4DA6FF] cursor-pointer ml-4 fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                        <div className='py-5'>
                            <div className='flex flex-nowrap border-r border-[#6B7A99]'>
                                <div className='mx-4 h-6 w-6'>
                                    <Bomb />
                                </div>
                                <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                    CRASH
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#4DA6FF] cursor-pointer fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                        <div className='py-5'>
                            <div className='flex flex-nowrap border-r border-[#6B7A99]'>
                                <div className='mx-4 h-6 w-6'>
                                    <Roulette />
                                </div>
                                <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                    DOUBLE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#4DA6FF] cursor-pointer fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                        <div className='py-5'>
                            <div className='flex flex-nowrap border-r border-[#6B7A99]'>
                                <div className='mx-4 h-6 w-6 mt-1'>
                                    <Coinflip />
                                </div>
                                <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                    COINFLIP
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-nowrap text-[#6B7A99] hover:text-white transition-colors duration-200 hover:border-b-2 border-[#4DA6FF] cursor-pointer fill-[#6B7A99] hover:fill-[#4DA6FF]'>
                        <div className='py-5'>
                            <div className='flex flex-nowrap'>
                                <div className='mx-4 h-6 w-6 mt-1'>
                                    <Crown />
                                </div>
                                <p className='font-semibold text-lg mr-6 invisible absolute lg:visible lg:relative'>
                                    JACKPOT
                                </p>
                            </div>
                        </div>
                    </div>
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