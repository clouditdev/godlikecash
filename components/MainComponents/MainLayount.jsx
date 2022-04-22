import Header from "./Header";
import { MobileHeader } from "./MobileHeader";
import { MobNav } from "./MobNav";

const MainLayout = ({children}) => {
    return(
        <div className="flex flex-col bg-[#242532] w-screen h-screen font-rubik justify-between">
            <Header/>
            <MobileHeader />
            <div className="flex h-screen">
                {children}
            </div>
            <MobNav />
        </div>
    )
}

export default MainLayout;