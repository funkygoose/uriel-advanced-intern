"use client";

import { openLoginModal } from "@/lib/modalSlice/page";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../modals/loginmodal/page";

export default function Settings() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <section id="foryou-library" className="p-10 h-[1000px]  md:ml-[200px] bg-white">
      <div className="main__wrapper m-auto p-auto">
        <div className=" text-3xl font-bold border-b-[1px]  border-gray-200 pb-4 mb-8 ">
          Settings
        </div>
        {!user.email ? (
          <div>
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
              <LoginModal />
            </div>
          </div>
        ) : (
          <div className="subscription__wrapper  w-[100%] m-auto ">
            <div className="border-b-[1px] border-gray-200 pb-6 mb-8">
              <div className="setting__content gap-4">
                <div className="setting__sub--title font-bold text-xl">
                  {" "}
                  Your Subscription Plan
                </div>
                <div className="setting__text">premium-plus</div>
              </div>
            </div>
            <div className="">
            <div className="email__content ">
              <div className="email__sub--title font-bold text-xl">Email</div>
              <div className="email__text">{user.email}</div>
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
