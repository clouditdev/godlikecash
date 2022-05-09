import React from 'react'
import { Games } from '../../components/MainComponents/Games'
import MainLayout from '../../components/MainComponents/MainLayount'

const LuckyLadyMoon = () => {
  return (
    <MainLayout>
        <div className="flex w-full h-screen justify-center z-20">
            <div className="flex w-full justify-center">
                <Games game="Lucky Lady Moon" provider="BGaming" demo="https://bgaming-network.com/games/LuckyLadyMoon/FUN?play_token=f51c1392-b974-4883-b350-6fe87dc52297" title="softswiss-luckyladymoon"/>
            </div>
        </div>
    </MainLayout>
  )
}

export default LuckyLadyMoon