import { closeLoginModal, openLoginModal } from "@/lib/modalSlice/page";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { setUser } from "@/lib/userslice/page";
export default function LoginModal() {
  const loginOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const router = useRouter();

  async function handleSignIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("./foryou");
    } catch (error) {
      const errorMessage = error.message;
        alert(`Sign-in failed because of ${errorMessage}`);
    } finally {
      setIsLoading(false);
      setIsLoading2(false);
    }
  }

  async function handleSignUp() {
    try {

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        );
       {userCredentials && router.push("./foryou")} 
    } catch (error) {
      const errorMessage = error.message;
      alert(`Sign-out failed because of ${errorMessage}`);
    }
    
  }
  async function handleGuestSignIn() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
      await signInWithEmailAndPassword(auth, "guest@gmail.com", "guest123");
      router.push("./foryou");
    } catch (error) {
      
    } finally {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          username: null,
          name: null,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: null,
        })
      );
    });
  }, []);

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
        <div
          className={`relative w-[400px] h-[550px] bg-white rounded-lg ${
            signup ? "h-fit" : ""
          }`}
        >
          <div className="flex justify-center items-center mt-10 px-4 w-full">
            <h2 className="font-bold text-xl">
              {!signup ? "Login" : "Sign up"} to Summarist
            </h2>
            <button
              onClick={() => dispatch(closeLoginModal())}
              className="absolute top-3 right-3 text-gray-900 hover:text-gray-500"
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
            rounded hover:bg-blue-900 transition-all duration-300"
                  onClick={handleGuestSignIn}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <>
                      <FaUser className="flex-grow-0" />
                      <h1 className="flex-grow text-center">
                        Login as a Guest
                      </h1>
                    </>
                  )}
                </button>
              </div>

              <div class="auth__separator">
                <h2 className="mx-3 text-gray-700 font-bold">or</h2>
              </div>
            </>
          )}

          <div className="flex justify-center items-center ">
            <button
              className="flex justify-center items-center bg-[#4285F4] hover:bg-blue-600 
            text-white w-[85%] h-10 mt-5 text-mg p-2 
            rounded"
            >
              <div className=" flex justify-center items-center rounded bg-white h-9 w-9 mr-auto ml-[-0.37rem]">
                <img className="w-6 h-6" src={"/assets/google.png"} />
              </div>
              <h1 className="flex-grow text-center">
                <span>{!signup ? "Login" : "Sign up"}</span> with Google
              </h1>
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
            onClick={signup ? handleSignUp : handleSignIn}
          >
            {isLoading2 ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <span>{!signup ? "Login" : "Sign up"}</span>
            )}
          </button>

          {!signup && (
            <div className="mt-9 cursor-pointer flex flex-col items-center text-sm font-light text-[#5696EC] hover:text-slate-500 ">
              <div className="mb-3">
                <p>Forgot your password?</p>
              </div>
            </div>
          )}
          <button
            className={`cursor-pointer bg-[#F1F6F4] w-[100%] h-10  flex items-center  
            justify-center rounded-bl-lg rounded-br-lg text-[#5696EC] 
            text-md font-light hover:bg-gray-200  ${signup ? "mt-[40px]" : ""}`}
            onClick={() => setSignup(!signup)}
          >
            {signup ? "Already have an account?" : "Don't have an account?"}
          </button>
        </div>
      </Modal>
    </>
  );
}
