import React from 'react'
import { FacebookIcon, TelegramIcon, VkIcon } from '../Icons/Icons'

const SocialMedia = () => {
  return (
    <div className="flex flex-nowrap my-1 mr-2">
        <div className="my-1 mx-2 h-6 w-6 fill-[#6B7A99] hover:fill-[#D4445C] cursor-pointer transition-all duration-300">
            <TelegramIcon />
        </div>
        <div className="my-1 mx-2 h-6 w-6 fill-[#6B7A99] hover:fill-[#D4445C] cursor-pointer transition-all duration-300">
            <VkIcon />
        </div>
        <div className="my-1 mx-2 h-6 w-6 fill-[#6B7A99] hover:fill-[#D4445C] cursor-pointer transition-all duration-300">
            <FacebookIcon />
        </div>
    </div>
  )
}

export default SocialMedia