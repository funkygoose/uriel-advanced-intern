import { closeLoginModal, closeSignupModal, openLoginModal, openSignupModal } from "@/lib/modalSlice/page";
import { Modal } from "@mui/material";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../loginmodal/page";
import { useState } from "react";

export default function SignUpModal() {
  const signUpOpen = useSelector((state) => state.modals.signUpModal);
  const dispatch = useDispatch();

  const [signUp, setSignup] = useState(true);

  function toggleSignup() {
    setSignup(!signUp);
    dispatch(closeLoginModal());
  }

  return (
    <>
    
      <Modal
      open={true}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div className="relative w-[400px] h-[450px] bg-white md:w-[400px] md:h-[450px] rounded-lg">
          <div className="flex justify-center items-center mt-10 px-4 w-full">
            <h2 className="font-bold text-xl">Sign up to Summarist</h2>
            <button
              onClick={() => dispatch(closeLoginModal())}
              className="absolute top-3 right-3 text-gray-900 hover:text-gray-900"
              aria-label="Close"
            >
              <RxCross2 className="text-3xl" />
            </button>
          </div>

          <div className="flex justify-center items-center ">
            <button
              className="bg-[#3A579D]
                flex justify-center items-center
    
                text-white w-[85%] mt-5 text-mg p-2 
                rounded-md"
            >
              <div className="flex-grow-0">
                <FaUser />
              </div>
              <h1 className="flex-grow text-center">Sign up with Google</h1>
            </button>
          </div>
          <div class="auth__separator">
            <h2 className="mx-3 text-gray-700 font-bold">or</h2>
          </div>
          <div className="flex flex-col items-center px-8">
            <input
              placeholder="Email Address"
              className="w-full mt-5 p-2 rounded-md border-solid border-2  border-gray-300 text-sm"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="w-full mt-5 p-2 rounded-md border-solid border-2 border-gray-300 text-sm"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn2 home__cta--btn2"
          >
            Sign up
          </button>

          <div
            className="cursor-pointer bg-[#F1F6F4] w-[100%] h-14 mt-12 flex items-center  
              justify-center rounded-bl-lg rounded-br-lg text-[#5696EC] text-lg font-light hover:bg-gray-200"
          >
            <div onClick={toggleSignup}>Already have an account?</div>
          </div>
        </div>
      </Modal>
      {signUp && <SignUpModal/>}
    </>
  );
}
