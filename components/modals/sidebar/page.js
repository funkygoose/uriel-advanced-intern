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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal, openSignupModal } from "@/lib/modalSlice/page";
import { auth } from "@/firebase";
import LoginModalTwo from "../loginmodaltwo/page";

export default function SideBar() {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [loggedIn, setLoggedIn] = useState()

  function handleSignOut() {
    auth.signOut().then(() => {
      // setLoggedIn(false)
      window.location.reload();
      console.log("User signed out successfully");
    });
  }

  const toggleForyou = () => {
    router.push("/foryou");
  };
  const toggleSettings = () => {
    router.push("/settings");
  };

  // const handleLogin = () => {
  //   router.push("/components/settingLogin"); // Redirect to login page
  // };

  return (
    <div className="sidebar fixed hidden md:flex bg-[#f7faf9] min-w-[200px] w-[200px] h-[100vh] flex-col ">
      <div className="sidebar__logo flex items-center justify-center m-auto h-14 pt-9 max-w-[160px]">
        <img
          className="w-[100%] h-10"
          src="/assets/logo.png"
          alt="Summmarist Logo"
        />
      </div>
      <div className="sidebar__wrapper flex flex-col justify-between h-[100%] overflow-y-auto mt-4">
        <div className="sidebar__top mt-8 ">
          <ul className=" ">
            <li
              className="flex items-center space-x-2 mt-2 pt-4 hover:bg-gray-200 cursor-pointer p-4 pl-5"
              onClick={toggleForyou}
            >
              <AiOutlineHome className="text-[rgb(3,43,65)] text-2xl" />
              <a>For you</a>
            </li>
            <li className="flex items-center space-x-2 mt-2 pt-4 hover:bg-gray-200 cursor-pointer  p-4  pl-5">
              <BsBookmark className="text-[rgb(3,43,65)] text-2xl" />
              <a>My Library</a>
            </li>
            <li className="flex items-center space-x-2 mt-2 pt-4  cursor-not-allowed p-4 pl-5">
              <RiBallPenLine className="text-[rgb(3,43,65)] text-2xl" />
              <a>Highlights</a>
            </li>
            <li className="flex items-center space-x-2 mt-2 pt-4   cursor-not-allowed p-4 pl-5 ">
              <AiOutlineSearch className="text-[rgb(3,43,65)] text-2xl" />
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__bottom">
          <ul className="">
            <div>
              <li
                className="flex items-center space-x-2 pb-5 hover:bg-gray-200 cursor-pointer p-5 pl-5"
                onClick={toggleSettings}
              >
                <SlSettings className="text-[rgb(3,43,65)] text-2xl" />
                <a>Settings</a>
              </li>
            </div>
            <li className="flex items-center space-x-2 pb-4 cursor-not-allowed p-4 pl-5">
              <RxQuestionMarkCircled className="text-[rgb(3,43,65)] text-2xl" />
              <a>Help & Support</a>
            </li>
            <li
              className="flex items-center space-x-2 pb-5 hover:bg-gray-200 cursor-pointer p-5 pl-5 "
              onClick={user.email && handleSignOut}
            >
              {user.email ? (
                <>
                  <LuLogOut className="text-[rgb(3,43,65)] text-2xl" />
                  <a>Logout</a>
                </>
              ) : (
                <>
                  <div
                    className="flex max-w-screen"
                    onClick={() => dispatch(openSignupModal())}
                  >
                    <LuLogOut className="text-[rgb(3,43,65)] text-2xl" />
                    <a className="ml-2">Login</a>
                  </div>
                  <LoginModalTwo />
                </>
              )}
            </li>
            <div className="m-4"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
