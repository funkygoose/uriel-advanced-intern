"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerModal from "../modals/hamburgerModal/page";
import { useEffect, useRef, useState } from "react";
import { Skeleton, debounce } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import SearchBook from "./searchBook/page";


export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function handleDelete() {
    if (search.length !== 0) {
      setSearch("");
    }
  }
  useEffect(() => {
    if (!search) {
      return;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const fetchData = async () => {
          const response = await fetch(
            `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
          );
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        };
        fetchData();
      }, 1000);
    }
  }, [search]);

 

  return (
    <div className="search__background  bg-white border-b h-20 min-w-[200px]" >
      <div className="search__wrapper flex justify-end items-center max-w-[1170px] lg:max-w-[1270px] w-[100%] mx-auto my-0 h-[100%] px-8 py-0">
        <div className="search__content flex items-center gap-6 max-w-[340px] w-[100%] pl-4">
          <div className="search flex items-center w-[100%]">
            <div
              className="input__input--wrapper relative bg-[#f1f6f4]
            flex items-center border-2 border-gray-300 rounded-lg over-hidden w-[100%]"
            >
              <input
                placeholder="Search for books"
                value={search}
                className="bg-[#f1f6f4] h-[36px] w-[80%] mx-4 outline-none text-xs"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div
                className=" absolute flex justify-center items-center right-2
              text-blue-900 border-1 border-l-2 pl-2 border-gray-300 h-[100%]"
                onClick={handleDelete}
              >
                {search.length === 0 ? (
                  <AiOutlineSearch className="text-2xl" />
                ) : (
                  <FaTimes className="text-2xl cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:hidden flex justify-center items-center ml-5 text-2xl cursor-pointer z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RxHamburgerMenu  />
        </div>

        <div
          className="main__container--one absolute border-solid top-24 bg-white flex flex-col  max-h-[540px] z-10
         "
        >
          {search &&
            (isLoading ? (
              data?.length !== 0 ? (
                <div className="search__books--wrapper h-[500px] w-[400px] z-10">
                  {new Array(2).fill(0).map((_, index) => (
                    <div className="bg-white-900 px-8 border-solid   border shadow-md z-10">
                      <div className="flex gap-6  border-b-[1px] border-solid   ">
                        <figure className="book__image--wrapper  ">
                          <Skeleton width={80} height={150} />
                        </figure>
                        <div className="pt-7">
                          <div className="search__book--title flex items-center font-bold ">
                            <Skeleton width={200} height={30} />
                          </div>
                          <div className="search__book--author font-light text-sm text-gray-500 mb-1 ">
                            <Skeleton width={200} height={30} />
                          </div>
                          <div className="search__book--duration">
                            <div className="recommended__book--details flex gap-1">
                              <div className="recommended__book--details-icon text-md text-gray-500 mr-1">
                                <Skeleton width={20} height={30} />
                              </div>
                              <div className="recommended__book--details-text text-sm text-gray-500 ">
                                <Skeleton width={50} height={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="absolute w-[300px]  ">
                  <div className="relative search__books--wrapper bg-white px-8 border-solid  border shadow-md top-[-320px] left-[-350px] ">
                    No books found
                  </div>
                </div>
              )
            ) : (
                <div className="search__books--wrapper flex flex-col w-[400px] h-[100%] m-auto border-solid shadow-md overflow-y-auto">
                  {data?.map((data) => (
                    <SearchBook
                      key={data.id}
                      subscriptionRequired={data.subscriptionRequired}
                      id={data.id}
                      title={data.title}
                      author={data.author}
                      subTitle={data.subTitle}
                      averageRating={data.averageRating}
                      imageLink={data.imageLink}
                      audioLink={data.audioLink}
                      totalRating={data.totalRating}
                      keyIdeas={data.keyIdeas}
                      type={""}
                      status={""}
                      summary={""}
                      tags={[]}
                      bookDescription={""}
                      authorDescription={""}
                    />
                  ))}
                </div>
            ))}
          {isMenuOpen && <HamburgerModal />}
        </div>
      </div>
    </div>
  );
}
