'use client'

import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";


import { RxQuestionMarkCircled } from "react-icons/rx";


import { LuLogOut } from "react-icons/lu";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";

export default function SideBar() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="hidden md:flex bg-[#f7faf9] min-h-screen flex-col w-64  sidebar-enter  ">
      <figure className="p-5">
        <img
          className="w-44 h-auto"
          src="/assets/logo.png"
          alt="Summmarist Logo"
        />
      </figure>
      <div className="flex flex-col justify-between flex-grow">
        <ul className="space-y-4 p-6">
          <li className="flex items-center space-x-2 pt-4">
            <AiOutlineHome className="text-[rgb(3,43,65)] text-2xl" />
            <span>For you</span>
          </li>
          <li className="flex items-center space-x-2 pt-6">
            <BsBookmark className="text-[rgb(3,43,65)] text-2xl" />
            <span>My Library</span>
          </li>
          <li className="flex items-center space-x-2 pt-6">
            <RiBallPenLine className="text-[rgb(3,43,65)] text-2xl" />
            <span>Highlights</span>
          </li>
          <li className="flex items-center space-x-2 pt-6">
            <AiOutlineSearch className="text-[rgb(3,43,65)] text-2xl" />

            <span>Search</span>
          </li>
        </ul>
        <ul className="space-y-4 p-6">
          <li className="flex items-center space-x-2 pb-6">
            <SlSettings className="text-[rgb(3,43,65)] text-2xl" />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 pb-5">
            <RxQuestionMarkCircled className="text-[rgb(3,43,65)] text-2xl" />

            <span>Help & Support</span>
          </li>
          <li className="flex items-center space-x-2 pb-3" onClick={toggleLogin}>
            {isLogged ? (
              <LuLogOut className="text-[rgb(3,43,65)] text-2xl" />
            ) : (
              <LuLogIn className="text-[rgb(3,43,65)] text-2xl" />
            )}
            <span>{isLogged ? "Logout" : "Login"}</span>

          </li>
          
        </ul>
      </div>
    </div>
  );
}
