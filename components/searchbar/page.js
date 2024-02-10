import { AiOutlineSearch } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="m-auto mt-5 ">
      <div className="flex  ">
        <input
        
          placeholder="Search for books"
          className="p-2 pr-8 w-full border-solid border-2  border-gray-300 text-xs"
          type="search">
            
        </input>
        <button className="p-2 border-[rgb(225,231,234)] border-solid border-2 ">
        <AiOutlineSearch className="text-2xl"/>

        </button>
        
      </div>

      <div className=" h-[1px] bg-[rgb(225,231,234)] mt-5"></div>
    </div>
  );
}
