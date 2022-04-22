import Link from "next/link";
import { GodlikeCash, Tg, Vk, Yt } from "../components/icons/Icons";

const verifyRequest = () => {
    return (
        <div className='flex w-screen h-screen bg-[#242532] justify-center'>
            <div className="flex flex-col justify-center">
                <div className="flex w-full justify-center my-4">
                    <div className="h-14 w-14">
                        <GodlikeCash />
                    </div>
                    <div className="flex flex-nowrap ml-2 mt-1">
                        <p className="text-white font-bold text-5xl">
                            Godlike
                        </p>
                        <p className="text-[#4DA6FF] font-bold text-5xl">
                            Cash
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full text-center">
                    <p className="text-2xl font-semibold text-white">
                        Проверте вашу почту
                    </p>
                    <p className="text-sm font-semibold text-white">
                        Ссылка для входа была отправлена на вашу почту.
                    </p>
                    <Link href="/" passHref>
                        <p className="bg-[#2E2F40] hover:bg-[#383a4e] shadow-xl py-2 px-2 rounded-md cursor-pointer mt-5 mb-2 mx-24 font-semibold text-gray-400 hover:text-white transition-colors duration-200">
                            Вернутся на сайт
                        </p>
                    </Link>
                </div>
                <div className='flex flex-nowrap px-4 py-4 justify-center'>
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
        </div>
    )
}

export default verifyRequest;