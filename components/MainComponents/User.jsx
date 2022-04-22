import { useSession } from "next-auth/react"
import Image from "next/image"

export const User = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className="flex flex-nowrap">
                <div className='w-14 h-14 mx-4 my-4'>
                    <Image width={50} height={50} className='rounded-md' src={session.user.image} alt="" />
                </div>
                <p className="text-md font-semibold text-white mt-7">
                    {session.user.name}
                </p>
            </div>
        )
    }
    return (
        <div className="py-5">
        </div>
    )
}
