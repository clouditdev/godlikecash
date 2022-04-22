import { motion } from "framer-motion"

export const Xgray = ({x}) => {
  return (
    <div>
        <motion.p whileHover={{ y: 5}} className="bg-[#333646] text-[#6f748f] py-1 px-2 font-semibold my-2 rounded-md mx-1 shadow-sm drop-shadow-md cursor-pointer">
         {x}x  
        </motion.p>
    </div>
  )
}
