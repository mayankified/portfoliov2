import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { PiMedalDuotone } from "react-icons/pi";

const Nav = () => {
    return (
        <div className=' z-40 w-full h-fit flex fixed bottom-0 justify-center mb-2'>
            <div className="flex flex-col ">
                <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md bg-[#fefeffb8] px-2">


                    <div className="group relative xs:px-4 px-1 cursor-pointer">
                        <a href='#hero'  className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <IoHomeOutline  className='text-[22px] '/>
                        </a>
                        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Home
                        </span>
                    </div>
                    <div className="group relative xs:px-4 px-1 cursor-pointer">
                        <a href='#about' className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <FaRegUser className='text-[20px] '/>
                        </a>
                        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            About
                        </span>
                    </div>
                    <div className="group relative xs:px-4 px-1 cursor-pointer">
                        <a href='#skills' className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <PiMedalDuotone className='text-[23px] '/>
                        </a>
                        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Skills
                        </span>
                    </div>
                    <div className="group relative xs:px-4 px-1 cursor-pointer">
                        <a href='#project' className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <FaPencil className='text-[19px] '/>
                        </a>
                        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Projects
                        </span>
                    </div>
                    <div className="group relative xs:px-4 px-1 cursor-pointer">
                        <a href='#contact' className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <IoChatboxOutline className='text-[22px] mt-1'/>
                        </a>
                        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Contacts
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav