"use client";

import SideBar from "@/components/modals/sidebar/page";
import SearchBar from "@/components/searchbar/page";
import { FaRegStar } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineAudio, AiOutlineClockCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgReadme } from "react-icons/cg";
import { Skeleton } from "@mui/material";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal, openSignupModal } from "@/lib/modalSlice/page";
import LoginModalTwo from "@/components/modals/loginmodaltwo/page";

export default function Page({ params }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookLoad, setBookLoad] = useState(false);

  const user = useSelector((state) => state.user);
  const isPremium = user.email && !loading;
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;

  const saveToLibrary = (id) => {
    const library = localStorage.getItem("library");
    let newLibrary = [];

    if (library) {
      newLibrary = JSON.parse(library);
    }
    newLibrary.push(id);

    localStorage.setItem("library", JSON.stringify(newLibrary));
  };

  async function fetchDataId(id) {
    const res = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    const data = await res.data;
    setBookLoad(data);
    return data;
  }
  useEffect(() => {
    const fetchData = async (id) => {
      const jsonData = await fetchDataId(id);
      setData(jsonData);
      setLoading(false);
    };
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <div className="">
      <div className="flex ">
        <div className="w-[100%]">
          <SideBar />
          <div className="">
            <SearchBar />
          </div>
          <div className=" px-6 h-[1200px] bg-white md:ml-[200px] ">
            {/* <audio></audio> */}
            <div className="container  max-w-[1000px]  m-auto p-auto  ">
              <div className="inner__wrapper  lg:flex lg:flex-row-reverse gap-8">
                <div className="inner__book--img-wrapper flex justify-center md:w-auto  mb-8">
                  <figure className="book__image--wrapper  h-[300px] w-[300px] min-w-[300px]">
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <Skeleton width="70%" height={300} borderRadius={0} />
                      </div>
                    ) : (
                      <img
                        className="w-[100%] h-[100%] "
                        src={data.imageLink}
                        alt="The Lean Startup"
                      />
                    )}
                  </figure>
                </div>
                {loading ? (
                  <div className="inner__book w-[100%]">
                    <div className="inner-book__title text-2xl md:text-3xl font-bold text-[#032b41] mb-3">
                      <Skeleton width="70%" height={50} borderRadius={0} />
                    </div>
                    <div className="inner-book__author font-bold text-[#032b41] mb-3">
                      <Skeleton width="20%" height={30} borderRadius={0} />
                    </div>
                    <div className="inner-book__sub--title md:text-xl font-light text-[#032b41] mb-3">
                      <Skeleton width="80%" height={50} borderRadius={0} />
                    </div>
                    <div className="inner-book__description--wrapper flex flex-wrap max-w-[400px] gap-y-3">
                      <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm ">
                        <Skeleton width="60%" height={30} borderRadius={0} />
                      </div>
                      <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                        <Skeleton width="50%" height={30} borderRadius={0} />
                      </div>
                      <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                        <Skeleton width="50%" height={30} borderRadius={0} />
                      </div>
                      <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                        <Skeleton width="60%" height={30} borderRadius={0} />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-6">
                      <Skeleton width="20%" height={80} borderRadius={0} />
                      <Skeleton width="20%" height={80} borderRadius={0} />
                    </div>
                    <div className="inner-book__bookmark flex items-center gap-2 text-[#0365f2] font-semibold mb-10">
                      <Skeleton width="30%" height={30} borderRadius={0} />
                    </div>
                    <Skeleton width="20%" height={30} borderRadius={0} />
                    <div className="inner-book__tags flex flex-wrap gap-4 mb-4">
                      <Skeleton width="20%" height={80} borderRadius={0} />
                      <Skeleton width="20%" height={80} borderRadius={0} />
                    </div>
                    <div className="inner-book__description text-[#032b41] mb-4 leading-6 text-sm md:text-base">
                      <Skeleton width="100%" height={200} borderRadius={0} />
                    </div>
                    <div className="inner-book__author ">
                      <Skeleton width="20%" height={30} borderRadius={0} />
                    </div>
                    <div className="inner-book__description ">
                      <Skeleton width="100%" height={200} borderRadius={0} />
                    </div>
                  </div>
                ) : (
                  <div className="inner__book w-[100%]">
                    <div className="inner-book__title text-2xl md:text-3xl font-bold text-[#032b41] mb-3">
                      {data.title} {!isPremium && <a>(Premium)</a>}
                    </div>
                    <div className="inner-book__author font-bold text-[#032b41] mb-3">
                      {data.author}
                    </div>
                    <div className="inner-book__sub--title md:text-xl font-light text-[#032b41] mb-3">
                      {data.subTitle}
                    </div>
                    <div className="inner-book__wrapper border-t border-b border-solid border-gray-300 py-4 mb-6">
                      <div className="inner-book__description--wrapper flex flex-wrap max-w-[400px] gap-y-3">
                        <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm ">
                          <div className="inner-book__icon mr-1 text-xl">
                            <FaRegStar />
                          </div>
                          <div className="inner-book__overall--rating flex items-center ">
                            {data.averageRating}
                          </div>
                          <div className="inner-book__total--rating ml-1 flex items-center">
                            ({data.totalRating} ratings)
                          </div>
                        </div>
                        <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                          <div className="inner-book__icon mr-1 text-2xl">
                            <AiOutlineClockCircle />
                          </div>
                          <div className="inner-book__time flex items-center">
                            03:24
                          </div>
                        </div>
                        <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                          <div className="inner-book__icon mr-1 text-2xl">
                            <AiOutlineAudio />
                          </div>
                          <div className="inner-book__overall--audio flex items-center">
                            Audio & Text
                          </div>
                        </div>
                        <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm">
                          <div className="inner-book__icon mr-1 text-2xl flex items-center ">
                            <HiOutlineLightBulb />
                          </div>
                          <div className="inner-book__overall--rating flex items-center">
                            {data.keyIdeas} Key Ideas
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-6">
                      <button
                        className="w-[144px] h-[48px] flex items-center justify-center bg-[#032b41] 
                      text-white rounded cursor-pointer gap-2 hover:bg-slate-600"
                        onClick={() => router.push(`/player/${id}`)}
                      >
                        <div className=" text-2xl">
                          <CgReadme />
                        </div>
                        <div>Read</div>
                      </button>
                      <button
                        className="w-[144px] h-[48px] bg-[#032b41] flex items-center 
                      justify-center text-white rounded cursor-not-allowed select-none gap-2  "
                      >
                        <div className=" text-2xl ">
                          <AiOutlineAudio />
                        </div>
                        <div className="">Listen</div>
                      </button>
                    </div>
                    <div className="inner-book__bookmark  flex items-center gap-2 text-[#0365f2]  font-semibold mb-10">
                      <div className="inner-book__bookmark--icon text-xl ">
                        <BsBookmark />
                      </div>

                      {!user.email ? (
                        <div
                          className="cursor-pointer"
                          onClick={() => dispatch(openSignupModal())}
                        >
                          Add Title to My Library
                        </div>
                      ) : (
                        <div className="cursor-not-allowed select-none">
                          Add Title to My Library
                        </div>
                      )}
                      <LoginModalTwo />
                    </div>
                    <div className="text-lg font-bold mb-4">
                      What's it about?
                    </div>
                    <div className="inner-book__tags flex flex-wrap gap-4 mb-4 cursor-not-allowed	">
                      {data.tags &&
                        data.tags.map((tag) => (
                          <div className="flex text-sm md:text-base items-center font-medium h-[48px] px-4 bg-[#f1f6f4] text-[#032b41] rounded gap-2">
                            <div>{tag}</div>
                          </div>
                        ))}
                    </div>
                    <div className="inner-book__description text-[#032b41] mb-4 leading-6 text-sm md:text-base">
                      {data.bookDescription}
                    </div>
                    <div className="inner-book__author text-[#032b41] text-lg font-bold mb-4">
                      About the Author
                    </div>
                    <div className="inner-book__description text-[#032b41] mb-10 leading-6 text-sm md:text-base">
                      {data.authorDescription}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
