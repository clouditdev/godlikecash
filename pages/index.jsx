import Carousel from "../components/MainComponents/Carousel";
import Live from "../components/MainComponents/Live";
import MainLayout from "../components/MainComponents/MainLayount";
import Popular from "../components/MainComponents/Popular";
import { Search } from "../components/MainComponents/Search";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full z-20">
        <Carousel />
        <Search />
        <Popular />
        <Live />
      </div>
    </MainLayout>
  )
}
