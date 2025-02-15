// import React from 'react'
import { GoTasklist } from "react-icons/go"
import { TbLogout } from "react-icons/tb";
import { MdDashboard,MdOutlinePeopleAlt,MdForwardToInbox } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <>
        <main className="bg-black text-white h-screen top-0 left-0 flex flex-col justify-between px-9 py-7 w-60 rounded-2xl ">
            <div className="flex items-center space-x-3 font-bold text-3xl">
                <GoTasklist />
                <h1>tache.</h1>
            </div>
            <ul className="flex items-start flex-col space-y-10 text-sm mb-20">
                <li className="flex items-center capitalize space-x-3">
                    <MdDashboard size={20} />
                    <p>dashboard</p>
                </li>
                <li className="flex items-center capitalize gap-3">
                    <HiOutlineChartBar  size={20}/>
                    Statistics
                </li>
                <li className="flex items-center capitalize space-x-3">
                    <MdOutlinePeopleAlt size={20} />
                    <p>team</p>
                </li>
                <li className="flex items-center capitalize space-x-3">
                    <MdForwardToInbox size={20} />
                    <p>inbox</p>
                </li>
                <li className="flex items-center capitalize space-x-3">
                    <IoSettingsOutline size={20} />
                    <p>settings</p>
                </li>
            </ul>
            <div>
                <button className="text-sm flex items-center space-x-3">
                <TbLogout  size={23}/>
                <p>Logout</p>
                </button>
            </div>
        </main>
    </>
  )
}
