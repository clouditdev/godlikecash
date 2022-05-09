import React from 'react'
import { GodlikeCash } from '../icons/Icons'

const Logo = () => {
    return (
        <div className="flex flex-nowrap text-2xl mx-4 my-2">
            <div className="h-8 w-8 fill-[#F8526E] mx-2">
                <GodlikeCash />
            </div>
            <p className="text-white">
                Godlike
            </p>
            <p className="text-[#F8526E]">
                Cash
            </p>
        </div>
    )
}

export default Logo