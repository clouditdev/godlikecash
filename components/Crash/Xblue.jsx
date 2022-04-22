import { motion } from "framer-motion"

export const Xblue = ({x}) => {
  return (
    <div>
        <motion.p whileHover={{ y: 5}} className="bg-[#29425A] text-[#36ABED] py-1 px-2 font-semibold rounded-md mx-1 my-2 shadow-sm drop-shadow-md cursor-pointer">
         {x}x  
        </motion.p>
    </div>
  )
}
