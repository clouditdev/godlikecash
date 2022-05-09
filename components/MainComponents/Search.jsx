import React from 'react'
import { SearchIcon } from '../icons/Icons'

export const Search = () => {
  return (
    <div className="flex w-full mt-4 z-10 justify-center">
        <div className="flex flex-nowrap bg-[#1B1A1F] mx-4 md:mx-0 w-full md:w-3/4 rounded-lg border border-[#312F39]">
            <div className="h-6 w-6 fill-[#878598] my-2 md:my-3 mx-2">
            <SearchIcon />
            </div>
            <input type="text" className="w-full text-[#878598] focus:outline-none bg-[#1B1A1F] rounded-lg" placeholder="Поиск по названию" />
        </div>
    </div>
  )
}
