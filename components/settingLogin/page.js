"use client";

import { openLoginModal } from "@/lib/modalSlice/page";
import Image from "next/image";
import { useDispatch } from "react-redux";
import LoginModal from "../modals/loginModal/page";

export default function Settings() {
  
  const dispatch = useDispatch();
  return (
    <section id="foryou-library" className="p-6 max-h-[1000px] md:ml-[200px]">
      <div className="main__wrapper w-[100%] m-auto p-auto">
        <div className="mt-4 text-3xl font-bold">Settings</div>
        <div className="w-[100%] mt-4 bg-gray-200 h-[1px]"></div>
        <figure className="flex justify-center items-center mt-8">
          <Image
            src={"/assets/login.png"}
            width={600}
            height={379}
            alt="landing"
          />
        </figure>
        <div className="flex justify-center items-center text-2xl font-bold">
          Login to your account to see your details.
        </div>
        <div className="flex justify-center items-center mt-4 ">
          
            <LoginModal/>
            
          
        </div>
      </div>
    </section>
  );
}
