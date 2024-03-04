"use client";

import LoginModal from "@/components/modals/loginmodal/page.js";
import useSWR from 'swr'
import SideBar from "@/components/modals/sidebar/page";
import SearchBar from "@/components/searchbar/page";
import { Skeleton } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";

export default function Page() {
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);
  const router = useRouter();

  const toggleBook = (id) => {
    router.push(`/book/${id}`);
  };

  async function fetchSuggested() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    setSuggested(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchSuggested();
  }, []);

  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>
      <div className="w-[100%]">
        <div className="">
          <SearchBar />
        </div>
        {!user.email ? (
          <div className="p-10 h-[1000px]  md:ml-[200px] ">
            <div className=" text-3xl font-bold border-b-[1px]   border-gray-200 pb-4 mb-8 ">
              My Library
            </div>
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
          <div className="w-full h-[1000px] px-6 md:ml-[200px] bg-white">
            <div className="my__library--row max-w-[1200px] w-[100%] mx-auto px-2 py-10">
              <div className="saved__books--container mb-4">
                <div className="saved__books--title mb-2 font-bold text-2xl">
                  Saved Books
                </div>
                <div className="saved__items font-light">0 items</div>
                <img />
              </div>
              <div className=" flex justify-center md:mr-52">
                <div className="my__library--modal bg-[#f1f6f4] p-8 my-2 mb-12 rounded-xl gap-2 max-w-max">
                  <div className="favorites__modal--title flex items-center justify-center font-bold text-lg">
                    Save your favorite books!
                  </div>
                  <div className="favorites__modal--subtitle">
                    When you save a book, it will appear here.
                  </div>
                </div>
              </div>
              <div className="finished__book--wrapper mb-4">
                <div className="mb-2 font-bold text-2xl">Finished</div>
                <div className="font-light">11 items</div>
              </div>
              <div className="finished__lower--wrapper  flex flex-col rounded-xl gap-2 max-w-max">
                <div className="flex">
                  {loading ? (
                    new Array(8).fill(0).map((_, index) => (
                      <div className="skeleton">
                        <div className="p-4 pr-2">
                          <figure className="flex justify-center items-center w-[172px] h-[172px] mt-6 mb-5">
                            <Skeleton
                              width={120}
                              height={300}
                              borderRadius={0}
                            />
                          </figure>
                          <div className="mt-2">
                            <Skeleton
                              width={160}
                              height={30}
                              borderRadius={0}
                            />
                          </div>
                          <div className="my-1">
                            <Skeleton
                              width={100}
                              height={30}
                              borderRadius={0}
                            />
                          </div>
                          <Skeleton width={160} height={40} borderRadius={0} />
                          <div className="flex gap-2">
                            <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                              <Skeleton
                                width={50}
                                height={30}
                                borderRadius={0}
                              />
                            </div>
                            <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                              <Skeleton
                                width={50}
                                height={30}
                                borderRadius={0}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex overflow-x-auto space-x-4  hide-vertical-scrollbar">
                      {suggested.slice(0, 8).map((suggested, index) => (
                        <div
                          key={suggested.id}
                          className="relative suggested__books hover:bg-[#F7FAF9] h-[380px] cursor-pointer"
                          onClick={() => toggleBook(suggested.id)}
                        >
                          <div className="p-2 mt-4">
                            <figure className="w-[172px] h-[172px] mt-1 ">
                              <img
                                className="w-[100%] h-[100%]"
                                src={suggested.imageLink}
                                alt="The Lean Startup"
                              />
                              <h1 className="font-bold mt-2 leading-tight">
                                {suggested.title}
                              </h1>

                              <span className="font-light text-[#6b757b] text-sm ">
                                {suggested.author}
                              </span>

                              <p className="text-sm pb-1">
                                {suggested.subTitle}
                              </p>
                              <div className="flex gap-2">
                                <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                                  <CiClock2 />
                                  <span>3:34</span>
                                </div>
                                <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                                  <IoIosStarOutline />
                                  <span>{suggested.averageRating}</span>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
