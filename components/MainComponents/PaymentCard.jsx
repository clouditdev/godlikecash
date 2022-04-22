import Image from "next/image"

export const PaymentCard = ({ img, min }) => {
  return (
    <div>
      <div className="flex flex-col w-40 h-24 justify-center bg-[#393A4F] hover:bg-[#42435C] rounded-md transition-colors duration-300 hover:shadow-md mx-2 my-2 cursor-pointer">
        <div className="flex justify-center">
          <Image width={100} height={60} className="h-16 w-24" src={img} alt="Payment" />
        </div>
        <p className="font-semibold text-xs text-center">Мин. сумма {min}$</p>
      </div>
    </div>
  )
}
