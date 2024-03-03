"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import BookPill from "./bookPill/page";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { setUser } from "@/lib/userslice/page";

export default function ForYouHome({id, title, author, audioLink, imageLink}) {
  const [select, setSelect] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recommendedDuration, setRecommendedDuration] = useState(0);
  const [suggestedDuration, setSuggestedDuration] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  ;

  async function fetchSelect() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    setSelect(data);
    setLoading(false);
  }
  async function fetchRecommended() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );
    setRecommended(data);
  }
  async function fetchSuggested() {
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    setSuggested(data);
  }

  const toggleBook = (id) => {
    router.push(`/book/${id}`);
  };

  

 
  
  useEffect(() => {
    if (recommended.length > 0) {
      const audio = new Audio(recommended[0].audioLink); 
      audio.onloadedmetadata = () => {
        const bookDuration = audio.duration;
        setRecommendedDuration(bookDuration);
      };
    }
  }, [recommended]);
  
  useEffect(() => {
    if (suggested.length > 0) {
      const audio = new Audio(suggested[0].audioLink); 
      audio.onloadedmetadata = () => {
        const bookDuration = audio.duration;
        setSuggestedDuration(bookDuration);
      };
    }
  }, [suggested]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // auth
        dispatch(
          setUser({
            username: null,
            name: null,
            uid: user.uid,
            email: user.email,
            photoUrl: null,
          })
        );
      } else {
        // error
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchSelect();
    fetchRecommended();
    fetchSuggested();
  }, []);

  return (
    <section id="foryou-library" className="p-6 md:ml-[200px]">
      <div className="main__wrapper max-w-[1000px] w-[100%] m-auto p-auto">
        <div className="for-you__wrapper">
          {loading ? ( //selected
            <div className="max-w-[600px] max-h-[100%] ">
              <div className="mb-3">
                <Skeleton width={200} height={50} borderRadius={0} />
              </div>
              <div>
                <Skeleton
                  variant="rectangle"
                  width={600}
                  height={225}
                  borderRadius={0}
                />
              </div>
            </div>
          ) : (
            select.map((select, index) => (
              <div key={select.id}>
                <div className="text-2xl font-bold mt-2">
                  Selected just for you
                </div>
                <div
                  className="rounded bg-[rgb(251,239,214)] mt-4 mb-6 md:h-48 cursor-pointer"
                  onClick={() => toggleBook(select.id)}
                >
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
                          src={select.imageLink}
                          alt="The Lean Startup"
                        />
                      </figure>
                      <div className="w-auto pl-4">
                        <div className="font-bold pb-1">{select.title}</div>
                        <div className="text-sm pb-4">{select.author}</div>
                        <div className="flex">
                          <FaCirclePlay className="text-4xl" />
                          <span className="ml-2 flex justify-center items-center text-sm text-[#1A2B46] font-semibold">
                            3 min 23 secs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="h-[480px]">
            {loading ? ( //recommended-top
              <div className="mt-2">
                <Skeleton width={200} height={50} borderRadius={0} />
                <Skeleton width={160} height={30} borderRadius={0} />
              </div>
            ) : (
              <div className="mb-4">
                <h2 className="text-2xl font-bold my-3">Recommended For You</h2>
                <div className="font-light ">We think you'll like these</div>
              </div>
            )}
            <div className="flex">
              {loading ? ( //recommended
                new Array(8).fill(0).map((_, index) => (
                  <div className="skeleton">
                    <div className="p-4 pr-2">
                      <figure className="flex justify-center items-center w-[172px] h-[172px] mt-6 mb-5">
                        <Skeleton width={120} height={300} borderRadius={0} />
                      </figure>
                      <div className="mt-2">
                        <Skeleton width={160} height={30} borderRadius={0} />
                      </div>
                      <div className="my-1">
                        <Skeleton width={100} height={30} borderRadius={0} />
                      </div>
                      <Skeleton width={160} height={40} borderRadius={0} />
                      <div className="flex gap-2">
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <Skeleton width={50} height={30} borderRadius={0} />
                        </div>
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <Skeleton width={50} height={30} borderRadius={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex overflow-x-auto space-x-4 py-4 hide-vertical-scrollbar">
                  {recommended.slice(0, 8).map((recommend, index) => (
                    <div
                      key={recommend.id}
                      className="relative for-you__recommend--books hover:bg-[#F7FAF9] h-[380px] cursor-pointer"
                      onClick={() => toggleBook(recommend.id)}
                    >
                      <div className="flex justify-end w-[100%]">
                        {!user.email && recommend.subscriptionRequired ? (
                          <BookPill />
                        ) : null}
                      </div>
                      <div className="p-2 mt-3">
                        <figure className="w-[172px] h-[172px] mt-2 ">
                          <img
                            className="w-[100%] h-[100%]"
                            src={recommend.imageLink}
                            alt="The Lean Startup"
                          />
                          <h1 className="font-bold mt-2 leading-tight">
                            {recommend.title}
                          </h1>

                          <span className="font-light text-[#6b757b] text-sm ">
                            {recommend.author}
                          </span>

                          <p className="text-sm pb-1">{recommend.subTitle}</p>
                          <div className="flex gap-2">
                            <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                              <CiClock2 />
                              <span>{formatTime(recommendedDuration)}</span>
                            </div>
                            <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                              <IoIosStarOutline />
                              <span>{recommend.averageRating}</span>
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
          <div className="pb-8">
            {loading ? ( //suggested-top
              <div className="mt-2">
                <Skeleton width={200} height={50} borderRadius={0} />
                <Skeleton width={160} height={30} borderRadius={0} />
              </div>
            ) : (
              <div className="mb-4">
                <div className="text-2xl font-bold my-3">Suggested Books</div>
                <div className="font-light ">Browse those books</div>
              </div>
            )}
            <div className="flex">
              {loading ? ( //suggested
                new Array(8).fill(0).map((_, index) => (
                  <div className="skeleton">
                    <div className="p-4 pr-2">
                      <figure className="flex justify-center items-center w-[172px] h-[172px] mt-6 mb-5">
                        <Skeleton width={120} height={300} borderRadius={0} />
                      </figure>
                      <div className="mt-2">
                        <Skeleton width={160} height={30} borderRadius={0} />
                      </div>
                      <div className="my-1">
                        <Skeleton width={100} height={30} borderRadius={0} />
                      </div>
                      <Skeleton width={160} height={40} borderRadius={0} />
                      <div className="flex gap-2">
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <Skeleton width={50} height={30} borderRadius={0} />
                        </div>
                        <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                          <Skeleton width={50} height={30} borderRadius={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex overflow-x-auto space-x-4 py-4 hide-vertical-scrollbar">
                  {suggested.slice(0, 8).map((suggested, index) => (
                    <div
                      key={suggested.id}
                      className="relative suggested__books hover:bg-[#F7FAF9] h-[380px] cursor-pointer"
                      onClick={() => toggleBook(suggested.id)}
                    >
                      <div className="flex justify-end w-[100%]">
                        {!user.email && suggested.subscriptionRequired ? (
                          <BookPill />
                        ) : null}
                      </div>
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

                          <p className="text-sm pb-1">{suggested.subTitle}</p>
                          <div className="flex gap-2">
                            <div className="flex items-center text-sm font-light gap-1 text-[#6b757b]">
                              <CiClock2 />
                              <span>{formatTime(suggestedDuration)}</span>
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
    </section>
  );
}
