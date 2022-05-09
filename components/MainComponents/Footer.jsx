import React from 'react'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-[#262230] py-4">
      <div className="flex w-3/4 border-t border-[#32303A]">
        <div className="flex flex-col w-full justify-center text-center">
          <div className="flex justify-center">
          <Logo />
          </div>
          <div className="flex justify-center">
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-sm font-semibold my-2">
            Copyright © GodlikeCash. Все права защищены
            </p>
            <p className="text-gray-500 text-sm">
              GodlikeCash принадлежит и управляется <a className="hover:text-gray-400 underline transition-colors duration-300" href="https://find-and-update.company-information.service.gov.uk/company/14081395" target="_blank" rel="noreferrer">SG Solution Games Ltd</a> (регистрационный номер 14081395) — 60, Primrose Cottage Flat 60zachary Ports, Redruth, Cornwall, United Kingdom, TR16 6EU. Платежи и операционные услуги осуществляются так-же компанией <a className="hover:text-gray-400 underline transition-colors duration-300" href="https://find-and-update.company-information.service.gov.uk/company/14081395" rel="noreferrer" target="_blank">SG Solution Games Ltd</a> (регистрационный номер 14081395) по адресу 60, Primrose Cottage Flat 60zachary Ports, Redruth, Cornwall, United Kingdom, TR16 6EU.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer