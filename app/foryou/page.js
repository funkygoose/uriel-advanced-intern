import ForYouHome from "@/components/foryouhome/page";
import SearchBar from "@/components/searchbar/page";
import SideBar from "@/components/modals/sidebar/page";
import React from "react";

const ForYou = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <SearchBar />
        <ForYouHome />
      </div>
    </div>
  );
};

export default ForYou;
