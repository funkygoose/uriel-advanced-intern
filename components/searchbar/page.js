import { AiOutlineSearch } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SearchBar() {
  return (
    <div className="search__background border-b h-20 min-w-[200px]">
      <div className="search__wrapper flex justify-end items-center mx-auto my-0 h-[100%] px-8 py-0">
        <div className="search__content flex items-center gap-6 max-w-[340px] w-[100%] pl-4">
          <div className="search flex items-center w-[100%]">
            <div
              className="input__input--wrapper relative bg-[#f1f6f4]
            flex items-center border-2 border-gray-300 rounded-lg over-hidden w-[100%]"
            >
              <input
                placeholder="Search for books"
                className="bg-[#f1f6f4] h-[36px] w-[80%] mx-4 outline-none text-xs"
                type="search"
              ></input>
              <div
                className=" absolute flex justify-center items-center right-2
              text-blue-900 border-1 border-l-2 pl-2 border-gray-300 h-[100%]"
              >
                <AiOutlineSearch className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center ml-5 text-2xl ">
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
}
