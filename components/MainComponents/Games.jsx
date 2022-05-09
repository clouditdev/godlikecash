import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState } from 'react';
import { ExitBorderIcon, FullBorderIcon, FullScreenIcon } from '../icons/Icons';


export const Games = ({ demo, title, game, provider }) => {
    const [fullborder, setFullborder] = useState(false)
    const handle = useFullScreenHandle();
    return (
        <div className="flex w-full flex-col mt-28">
            <div className="flex w-full justify-center h-full">
                <div className={fullborder ? "flex flex-col w-full justify-center bg-[#292731] transition-all duration-500 drop-shadow-xl" : "flex flex-col w-2/3 justify-center bg-[#292731] rounded-lg transition-all duration-500 drop-shadow-xl"}>
                    <FullScreen className="w-full h-full" handle={handle}>
                        <iframe className={fullborder ? "w-full h-full" : "w-full h-full rounded-t-lg"} title={title} src={demo} allowFullScreen allow="autoplay" frameborder="0"></iframe>
                    </FullScreen>
                    <div className="flex flex-nowrap justify-between w-full">
                        <div className="flex flex-col">
                            <p className="text-[#fff] font-semibold pt-4 pl-5">
                                {game}
                            </p>
                            <p className="text-[#7D7790] pl-5 pb-4 text-sm">
                                {provider}
                            </p>
                        </div>
                        <div className="flex flex-nowrap">
                            <div>
                                {fullborder ?
                                    <button className="fill-[#8F89A6] p-3 rounded-lg mt-4 mr-4 bg-[#322F3B] hover:bg-[#3e3b49] transition duration-500" onClick={() => setFullborder(false)}>
                                        <div className="h-5 w-5">
                                            <ExitBorderIcon />
                                        </div>
                                    </button>
                                    :
                                    <button className="fill-[#8F89A6] p-3 rounded-lg mt-4 mr-4 bg-[#322F3B] hover:bg-[#3e3b49] transition duration-500" onClick={() => setFullborder(true)}>
                                        <div className="h-5 w-5">
                                            <FullBorderIcon />
                                        </div>
                                    </button>
                                }
                            </div>
                            <div>
                                <button className="fill-[#8F89A6] p-3 rounded-lg mt-4 mr-4 bg-[#322F3B] hover:bg-[#3e3b49] transition duration-500" onClick={handle.enter}>
                                    <div className="h-5 w-5">
                                        <FullScreenIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
