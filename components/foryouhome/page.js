"use client";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

export default function ForYouHome() {
  const [select, setSelect] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchSelect() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    setSelect(data);
  }
  async function fetchRecommended() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );
    setRecommended(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchSelect();
    fetchRecommended();
  }, []);

  return (
    <section id="foryou-library" className="p-6 h-screen md:ml-[200px]">
      <div className="main__wrapper max-w-[1000px] w-[100%] m-auto p-auto">
        <div className="for-you__wrapper">
          <h1 className="text-2xl font-bold mt-2">Selected just for you</h1>
          <div className="rounded bg-[rgb(251,239,214)] mt-3 md:h-48">
            <div className=" md:flex p-6 md:p-6">
              <div className=" pb-4 md:w-[35%]">
                <h1 className="text-sm md:text-md leading-5">
                  How Constant Innovation Creates Radically Successful
                  Businesses
                </h1>
              </div>
              <div className="md:h-36 w-[1px] bg-[#bac8ce] mx-7 "></div>

              <div className="flex md:w-[60%]  ">
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
                    <span className="ml-2 flex justify-center items-center text-sm text-[#1A2B46] font-semibold">
                      3 mins 23 secs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold my-3">Recommended For You</h2>
            <span className="font-light ">We think you'll like these</span>
          </div>
          <div className="flex">
            {loading
              ? new Array(6).fill(0).map((_, index) => (
                  <div className="skeleton">
                    <div className="p-4 pr-2">
                      <figure className="w-[172px] h-[172px] mt-10">
                        <img
                          className="w-[100%] h-[100%]"
                          src={
                            "https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
                          }
                          alt="The Lean Startup"
                        />
                      </figure>
                      <h1 className="font-bold mt-2 leading-tight">
                        {" "}
                        How to Win Friends and Influence People in the Digital
                        Age
                      </h1>
                      <div className="my-1">
                        <span className="font-light text-[#6b757b] text-sm ">
                          Dale Carnegie
                        </span>
                      </div>
                      <p className="text-sm pb-1">
                        Time-tested advice for the digtial age
                      </p>
                      <div className="flex gap-2">
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <CiClock2 />
                          <span>03:24</span>
                        </div>
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <IoIosStarOutline />
                          <span>4.4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : recommended.slice(0, 6).map((recommend, index) => (
                  <div className="recommend__books">
                    <div className="p-5 ">
                      <figure className="w-[172px] h-[172px] mt-5 ">
                        <img
                          className="w-[100%] h-[100%]"
                          src={
                            "https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
                          }
                          alt="The Lean Startup"
                        />
                        <h1 className="font-bold mt-2 leading-tight">
                          {" "}
                          How to Win Friends and Influence People in the Digital
                          Age
                        </h1>

                        <span className="font-light text-[#6b757b] text-sm ">
                          Dale Carnegie
                        </span>

                        <p className="text-sm pb-1">
                          Time-tested advice for the digtial age
                        </p>
                        <div className="flex gap-2">
                          <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                            <CiClock2 />
                            <span>03:24</span>
                          </div>
                          <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                            <IoIosStarOutline />
                            <span>4.4</span>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
