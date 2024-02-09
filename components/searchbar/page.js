import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="relative m-auto sm:pl-64 mt-5 ">
      <input
        placeholder="Search for books"
        className="p-2 pr-8 w-72 rounded border-solid border-2 border-gray-300 text-xs"
        type="search"
      />
      <div>
        <IoIosSearch className="absolute inset-y-0 right-0 flex justify-center items-center"/>
      </div>
    </div>
  );
}
