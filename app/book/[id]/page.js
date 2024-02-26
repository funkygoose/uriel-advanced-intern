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

export default function Id() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query || {};

  async function fetchDataId(id) {
    const res = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true); // Set loading state to true before fetching data
        const jsonData = await fetchDataId(id);
        setData(jsonData);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <div className="flex ">
        <div className="w-[100%]">
          <SideBar />
          <div className="">
            <SearchBar />
          </div>
          <div className=" px-6   h-screen md:ml-[200px] ">
            {/* <audio></audio> */}
            <div className="container  max-w-[1000px]  m-auto p-auto  ">
              <div className="inner__wrapper  lg:flex lg:flex-row-reverse gap-8">
                <div className="inner__book--img-wrapper flex justify-center md:w-auto  mb-8">
                  <figure className="book__image--wrapper  h-[300px] w-[300px] min-w-[300px]">
                    <img
                      className="w-[100%] h-[100%] "
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
                      }
                      alt="The Lean Startup"
                    />
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
                    <div className="inner-book__wrapper border-t border-b border-solid border-gray-300 py-4 mb-6">
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
                      {data.title}
                    </div>
                    <div className="inner-book__author font-bold text-[#032b41] mb-3">
                      Dale Carnegie
                    </div>
                    <div className="inner-book__sub--title md:text-xl font-light text-[#032b41] mb-3">
                      Time-tested advice for the digital age
                    </div>
                    <div className="inner-book__wrapper border-t border-b border-solid border-gray-300 py-4 mb-6">
                      <div className="inner-book__description--wrapper flex flex-wrap max-w-[400px] gap-y-3">
                        <div className="inner-book__description flex item-center w-[50%] text-[#032b41] font-medium text-sm ">
                          <div className="inner-book__icon mr-1 text-xl">
                            <FaRegStar />
                          </div>
                          <div className="inner-book__overall--rating flex items-center ">
                            4.4
                          </div>
                          <div className="inner-book__total--rating ml-1 flex items-center">
                            (608 ratings)
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
                            8 Key Ideas
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-6">
                      <button className="w-[144px] h-[48px] flex items-center justify-center bg-[#032b41] text-white rounded cursor-pointer gap-2">
                        <div className=" text-2xl">
                          <CgReadme />
                        </div>
                        <div>Read</div>
                      </button>
                      <button className="w-[144px] h-[48px] bg-[#032b41] flex items-center justify-center text-white rounded cursor-pointer gap-2">
                        <div className=" text-2xl ">
                          <AiOutlineAudio />
                        </div>
                        <div className="">Listen</div>
                      </button>
                    </div>
                    <div className="inner-book__bookmark flex items-center gap-2 text-[#0365f2] font-semibold mb-10">
                      <div className="inner-book__bookmark--icon text-xl">
                        <BsBookmark />
                      </div>
                      <div className="">Add Title to My Library</div>
                    </div>
                    <div className="text-lg font-bold mb-4">
                      What's it about?
                    </div>
                    <div className="inner-book__tags flex flex-wrap gap-4 mb-4">
                      <div className="flex text-sm md:text-base items-center font-medium h-[48px] px-4 bg-[#f1f6f4] text-[#032b41] rounded cursor-pointer gap-2">
                        <div></div>
                        <div>Communication Skills</div>
                      </div>
                      <div className="flex text-sm md:text-base items-center font-medium h-[48px] px-4 bg-[#f1f6f4] text-[#032b41] rounded cursor-pointer gap-2">
                        <div></div>
                        <div>Technology & the Future</div>
                      </div>
                    </div>
                    <div className="inner-book__description text-[#032b41] mb-4 leading-6 text-sm md:text-base">
                      "How to Win Friends and Influence People" is a self-help
                      book written by Dale Carnegie and first published in 1936.
                      The book provides practical advice and techniques for
                      improving one's communication and social skills, with the
                      goal of building better relationships and becoming more
                      influential in both personal and professional settings.
                      The book covers topics such as the importance of smiling,
                      listening actively, giving honest and sincere
                      appreciation, avoiding criticism, and becoming genuinely
                      interested in others. It also emphasizes the power of
                      empathy and understanding other people's perspectives.
                      "How to Win Friends and Influence People" has been widely
                      read and praised for its timeless and practical advice,
                      and is considered a classic in the field of
                      self-improvement.
                    </div>
                    <div className="inner-book__author text-[#032b41] text-lg font-bold mb-4">
                      About the Author
                    </div>
                    <div className="inner-book__description text-[#032b41] mb-10 leading-6 text-sm md:text-base">
                      Dale Carnegie (1888-1955) was an American author,
                      lecturer, and developer of self-improvement courses. He is
                      best known for his book "How to Win Friends and Influence
                      People," which has sold over 30 million copies worldwide
                      and is considered a classic in the self-help genre.
                      Carnegie's teachings focused on improving interpersonal
                      skills, communication, and leadership, and his courses and
                      books were aimed at helping individuals become more
                      confident, successful, and influential in both their
                      personal and professional lives. He also founded the Dale
                      Carnegie Training program, which is still in operation
                      today and has helped millions of people around the world
                      improve their communication and leadership skills.
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
