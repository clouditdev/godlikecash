import React from 'react'

export const Games = ({demo, title, game}) => {
    return (
        <div className="flex w-full flex-col justify-center mt-28">
            <div className="flex flex-col w-full h-full justify-center bg-[#343040] px-4 pb-4 rounded-lg">
                <p className="text-[#F97C91]">
                    {game}
                </p>
                <iframe allowFullScreen="true" className="w-full h-full" title={title} src={demo} allowfullscreen webkitallowfullscreen allow="autoplay" frameborder="0"></iframe>
            </div>
        </div>
    )
}
