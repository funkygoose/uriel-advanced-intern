"use client";

import { openLoginModal, openSettingModal } from "@/lib/modalSlice/page";
import Image from "next/image";
import { useDispatch } from "react-redux";
import LoginModal from "../modals/settingModal/page";

export default function Settings({ title }) {
  const dispatch = useDispatch();
  return (
    <section id="foryou-library" className=" md:ml-[200px]">
      <div className="main__wrapper w-[100%] m-auto p-auto">
        
        <figure className="flex justify-center items-center mt-8">
          <Image
            src={"/assets/login.png"}
            width={500}
            height={300}
            alt="landing"
          />
        </figure>
        <div className="flex justify-center items-center text-2xl font-bold">
          Log in to your account to read and listen to the book
        </div>
        <div className="flex justify-center items-center mt-4 ">
        <button
        className="btn home__cta--btn"
        onClick={() => dispatch(openSettingModal())}
      >
        Login
      </button>
          <LoginModal />
        </div>
      </div>
    </section>
  );
}
