import { closeLoginModal, openLoginModal } from "@/lib/modalSlice/page";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function LoginModal() {
  const loginOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

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
        <div className="relative w-[400px] h-[550px] bg-white md:w-[400px] md:h-[550px] rounded-lg">
          <div className="flex justify-center items-center mt-10 px-4 w-full">
            <h2 className="font-bold text-xl">Log in to Summarist</h2>
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
              <h1 className="flex-grow text-center">Login as a Guest</h1>
            </button>
          </div>
          <div class="auth__separator">
            <h2 className="mx-3 text-gray-700 font-bold">or</h2>
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
              <h1 className="flex-grow text-center">Login with Google</h1>
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
            />
            <input
              placeholder="Password"
              className="w-full mt-5 p-2 rounded-md border-solid border-2 border-gray-300 text-sm"
              type={"password"}
            />
          </div>
          <button
            className="btn2 home__cta--btn2"
            onClick={() => dispatch(openLoginModal())}
          >
            Login
          </button>
        </div>
      </Modal>
    </>
  );
}
