"use client";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function ForYouHome() {
  const [select, setSelect] = useState([]);

  async function fetchSelect() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    setSelect(data);
  }
  useEffect(() => {
    fetchSelect();
  }, []);

  return (
    <section id="foryou-library" className="p-7">
      <h1 className="text-2xl font-bold">Selected just for you</h1>
      <div className="bg-[rgb(251,239,214)] mt-3 h-48">
        <div className="flex p-6 ">
          <div className=" pb-4 w-[35%]">
            <h1 className="leading-5">
              How Constant Innovation Creates Radically Successful Businesses
            </h1>
          </div>
          <div class="h-38 w-[1px] bg-[#bac8ce] mx-7 "></div>

          <div className="flex w-[60%] ">
            <figure className="lean-box h-36">
              <img
                className="w-[100%] h-[100%]"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
                }
                alt="The Lean Startup"
              />
            </figure>
            <div className="w-auto pl-4">
              <div className="font-bold pb-1">The Lean Startup</div>
              <div className="text-sm pb-4">Eric Ries</div>
              <div className="flex">
                <FaCirclePlay className="text-4xl" />
                <span className="ml-2 flex justify-center items-center text-sm text-[#1A2B46] font-semibold">3 mins 23 secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-3">Recommended For You</h2>
      <span>We Think you'll like these</span>
      
    </section>

    //    new Array(6).fill(0).map((_, index) => (
    //               <div></div>
    // ))
  );
}
