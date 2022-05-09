import React from 'react'
import { Games } from '../../components/MainComponents/Games'
import MainLayout from '../../components/MainComponents/MainLayount'

const TheDogHouseMegaways = () => {
  return (
    <MainLayout>
        <div className="flex w-full h-screen justify-center z-20">
            <div className="flex w-full justify-center">
                <Games game="The Dog House Megaways" provider="Pragmatic Play" demo="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysdogs&jurisdiction=99&lang=en&lobbyUrl=https%3A%2F%2Fjet.casino%2Fexit_iframe" title="The Dog House Megaways - Pragmatic Play"/>
            </div>
        </div>
    </MainLayout>
  )
}

export default TheDogHouseMegaways