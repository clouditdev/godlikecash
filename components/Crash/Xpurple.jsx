import { motion } from "framer-motion"

export const Xpurple = ({x}) => {
  return (
    <div>
        <motion.p whileHover={{ y: 5}} className="bg-[#473469] text-[#874ED4] py-1 px-2 font-semibold my-2 rounded-md mx-1 shadow-sm drop-shadow-md cursor-pointer">
         {x}x  
        </motion.p>
    </div>
  )
}
