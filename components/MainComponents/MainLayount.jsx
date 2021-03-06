import Footer from "./Footer";
import Header from "./Header";
import { MobileHeader } from "./MobileHeader";
import { MobNav } from "./MobNav";

const MainLayout = ({children}) => {
    return(
        <div className="flex flex-col w-full font-rubik justify-between">
            <Header/>
            <MobileHeader />
            <div className="flex w-full overflow-hidden">
                {children}
            </div>
            <MobNav />
            <div className="flex flex-col w-full z-10">
            <Footer />
            </div>
            <div className="flex fixed bg-[#262230] h-screen w-screen z-0"/>
        </div>
    )
}

export default MainLayout;