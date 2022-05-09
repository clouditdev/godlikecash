import React from 'react'
import { Games } from '../../components/MainComponents/Games'
import MainLayout from '../../components/MainComponents/MainLayount'

const Queenofthesun = () => {
  return (
    <MainLayout>
        <div className="flex w-full h-screen justify-center z-20">
            <div className="flex w-full md:w-3/4">
                <Games game="Queen of the Sun - Booongo" demo="https://api-prod.infingame.com/bm-launch/softswiss/jetcasino/prod?gameName=queen_of_the_sun&key=TEST1000&country=RUS&demo=true&shell=request&language=ru&segment=desktop" title="Queen of the Sun - Booongo"/>
            </div>
        </div>
    </MainLayout>
  )
}

export default Queenofthesun