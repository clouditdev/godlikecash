import { GodlikeCash, Success } from "../components/icons/Icons";
import { getProviders, signIn, useSession } from "next-auth/react"
import { Redirect } from "../components/MainComponents/Redirect";
import { motion } from "framer-motion"

const SignIn = ({ providers }) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='flex w-screen h-screen bg-[#242532] justify-center'>
        <div className="flex flex-col w-full justify-center">
          <div className="flex w-full justify-center my-4">
            <div className="h-14 w-14">
              <GodlikeCash />
            </div>
            <div className="flex flex-nowrap ml-2 mt-1">
              <p className="text-white font-bold text-5xl">
                Godlike
              </p>
              <p className="text-[#4DA6FF] font-bold text-5xl">
                Cash
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col justify-center">
              <div className="flex flex-nowrap fill-green-500 justify-center">
                <motion.div initial={{ rotate: 360, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} className="mt-1">
                  <Success />
                </motion.div>
                <p className="text-green-500 mb-2 text-md text-center font-bold ml-1">
                  Вы успешно вошли!
                </p>
              </div>
              <div className="flex justify-center">
                <Redirect />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex w-screen h-screen bg-[#242532] justify-center'>
      <div className="flex flex-col w-full justify-center">
        <div className="flex w-full justify-center my-4">
          <div className="h-14 w-14">
            <GodlikeCash />
          </div>
          <div className="flex flex-nowrap ml-2 mt-1">
            <p className="text-white font-bold text-5xl">
              Godlike
            </p>
            <p className="text-[#4DA6FF] font-bold text-5xl">
              Cash
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-400 text-center mt-5">
            Выберите способ входа
          </p>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button className="bg-[#2E2F40] hover:bg-[#383a4e] shadow-xl py-2 px-2 rounded-md cursor-pointer my-2 mx-24 font-semibold text-gray-400 hover:text-white transition-colors duration-200" onClick={() => signIn(provider.id)}>
                  Войти с помощью {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}