"use client";
import SideBar from "@/components/modals/sidebar/page";
import SearchBar from "@/components/searchbar/page";
import Settings from "@/components/settingLogin/page";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingPlayer from "@/components/settingPlayer/page";
export default function Page({ params }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const isPremium = user.email && !loading;
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;

  async function fetchDataId(id) {
    setLoading(true);
    const res = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    const data = await res.data;
    setLoading(false);
    return data;
}
useEffect(() => {
    const fetchData = async (id) => {
        const jsonData = await fetchDataId(id);
        setData(jsonData);
    };
    if (id) {
      fetchData(id);
    }
  }, [id]);

  if (!user.email) {
    return (
      <div className="flex relative">
        <div className="z-10">
          <SideBar />
        </div>
        <div className="w-[100%]">
          <div className="sticky top-0 bg-white z-0">
            <SearchBar />
          </div>
          <div className="md:ml-[200px] p-8">
            <div className="item-center w-[100%] max-w-[800px]  m-auto p-auto">
              <div
                className="inner-book__author  text-[#032b41] text-2xl font-bold border-b 
              border-solid border-gray-300 mb-4 pb-4"
              >
                <p>{data.title}</p>
              </div>
              <div className="flex justify-center items-center ">
                <SettingPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex relative">
      <div className="z-10">
        <SideBar />
      </div>
      <div className="w-[100%]">
        <div className="sticky top-0 bg-white z-0">
          <SearchBar />
        </div>

        <div className=" px-6 h-screen md:ml-[200px] ">
          {/* <audio></audio> */}
          <div className="containerTwo  max-w-[1000px]  m-auto p-auto  ">
            <div className="inner__wrapper  flex justify-center items-center">
              <div className="audio__book--summary max-w-[800px] m-auto p-6 ">
                <div className="inner-book__author text-[#032b41] text-2xl font-bold border-b border-solid border-gray-300 mb-8 pb-4 leading-6">
                  <p>{data.title}</p>
                </div>
                <div className="inner-book__description text-[#032b41] mb-10 leading-6 text-sm md:text-base whitespace-pre-line">
                  {data.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
