import { closeLoginModal, openLoginModal } from "@/lib/modalSlice/page";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import Link from "next/link";
export default function LoginModal() {
  const loginOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  function toggleSignup() {
    setSignup(!signup);
    dispatch(closeLoginModal);
  }

  return (
    <>
      <button
        className="btn home__cta--btn"
        onClick={() => dispatch(openLoginModal())}
      >
        Login
      </button>

      <Modal
        open={loginOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        
        <div className={`relative w-[400px] h-[550px] bg-white md:w-[400px] md:h-[550px] rounded-lg ${signup ? 'h-[450px]' : ''}`}>

          <div className="flex justify-center items-center mt-10 px-4 w-full">
            <h2 className="font-bold text-xl">
              {!signup ? "Login" : "Sign up"} to Summarist
            </h2>
            <button
              onClick={() => dispatch(closeLoginModal())}
              className="absolute top-3 right-3 text-gray-900 hover:text-gray-900"
              aria-label="Close"
            >
              <RxCross2 className="text-3xl" />
            </button>
          </div>
          {!signup && (
            <>
              <div className="flex justify-center items-center ">
                <button
                  className="bg-[#3A579D]
            flex justify-center items-center

            text-white w-[85%] mt-5 text-mg p-2 
            rounded"
                >
                  <div className="flex-grow-0">
                    <FaUser />
                  </div>
                  <h1 className="flex-grow text-center">Login as a Guest</h1>
                </button>
              </div>

              <div class="auth__separator">
                <h2 className="mx-3 text-gray-700 font-bold">or</h2>
              </div>
            </>
          )}

          <div className="flex justify-center items-center ">
            <button
              className="bg-[#4285F4] hover:bg-blue-600
            flex justify-center items-center

            text-white w-[85%] h-10 mt-5 text-mg p-2 
            rounded"
            >
              <div className=" flex justify-center items-center left- rounded bg-white h-9 w-9 absolute  left-8 ">
                <img
                  className="w-6 h-6"
                  src={"/assets/google.png" || "google.png"}
                />
              </div>
              <h1 className="flex-grow text-center">Login with Google</h1>
            </button>
          </div>
          <div class="auth__separator">
            <h2 className="mx-3 text-gray-700 font-bold">or</h2>
          </div>
          <div className="flex flex-col items-center px-8">
            <input
              placeholder="Email Address"
              className="w-full mt-5 p-2 rounded border-solid border-2  border-gray-300 text-sm"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="w-full mt-5 p-2 rounded border-solid border-2 border-gray-300 text-sm"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn2 home__cta--btn2"
            onClick={() => dispatch(openLoginModal())}
          >
            {!signup ? "Login" : "Sign up"}
          </button>
          {!signup && (
            <div className="mt-9 cursor-pointer flex flex-col items-center text-sm font-light">
              <div className="mb-3">
                <p>Forgot your password?</p>
              </div>
            </div>
          )}
          <button
            className={`cursor-pointer bg-[#F1F6F4] w-[100%] h-10  flex items-center  
          justify-center rounded-bl-lg rounded-br-lg text-[#5696EC] text-md font-light hover:bg-gray-200 ${signup ? 'mt-16' : ''}`}
            onClick={() => setSignup(!signup)}
          >
            {signup ? "Already have an account?" : "Don't have an account?"}
          </button>
        </div>
      </Modal>
    </>
  );
}
