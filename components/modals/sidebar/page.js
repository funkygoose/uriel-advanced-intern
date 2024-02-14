"use client";

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
    <div className="sidebar fixed hidden md:flex bg-[#f7faf9] min-w-[200px] w-[200px] h-[100vh] flex-col sidebar-enter ">
      <div className="sidebar__logo flex items-center justify-center m-auto h-14 pt-9 max-w-[160px]">
        <img
          className="w-[100%] h-10"
          src="/assets/logo.png"
          alt="Summmarist Logo"
        />
      </div>
      <div className="sidebar__wrapper flex flex-col justify-between h-[100%] overflow-y-auto">
        <div className="sidebar__top mt-10 ">
          <ul className="space-y-4 ml-5">
            <li className="flex items-center space-x-2 pt-4">
              <AiOutlineHome className="text-[rgb(3,43,65)] text-2xl" />
              <a>For you</a>
            </li>
            <li className="flex items-center space-x-2 pt-6">
              <BsBookmark className="text-[rgb(3,43,65)] text-2xl" />
              <a>My Library</a>
            </li>
            <li className="flex items-center space-x-2 pt-6">
              <RiBallPenLine className="text-[rgb(3,43,65)] text-2xl" />
              <a>Highlights</a>
            </li>
            <li className="flex items-center space-x-2 pt-6">
              <AiOutlineSearch className="text-[rgb(3,43,65)] text-2xl" />
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__bottom">
          <ul className="space-y-4 ml-5">
            <li className="flex items-center space-x-2 pb-5">
              <SlSettings className="text-[rgb(3,43,65)] text-2xl" />
              <a>Settings</a>
            </li>
            <li className="flex items-center space-x-2 pb-5">
              <RxQuestionMarkCircled className="text-[rgb(3,43,65)] text-2xl" />
              <a>Help & Support</a>
            </li>
            <li
              className="flex items-center space-x-2 pb-5"
              onClick={toggleLogin}
            >
              {isLogged ? (
                <LuLogOut className="text-[rgb(3,43,65)] text-2xl" />
              ) : (
                <LuLogIn className="text-[rgb(3,43,65)] text-2xl" />
              )}
              <a>{isLogged ? "Logout" : "Login"}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
