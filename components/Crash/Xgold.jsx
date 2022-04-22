import { motion } from "framer-motion"

export const Xgold = ({x}) => {
  return (
    <div>
        <motion.p whileHover={{ y: 5}} className="bg-[#FFD232] my-2 text-[#852813] py-1 px-2 font-semibold rounded-md mx-1 shadow-sm drop-shadow-md cursor-pointer">
         {x}x  
        </motion.p>
    </div>
  )
}
