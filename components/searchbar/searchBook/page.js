import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

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
export default function SearchBook({
  id,
  title,
  author,
  audioLink,
  imageLink,
}) {
  const [duration, setDuration] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const audio = new Audio(audioLink);
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
  }, []);

  return (
    <div
      className=" cursor-pointer  bg-white-900 "
      onClick={() => router.push(`/book/${id}`)}
    >
      <div className="flex gap-6 p-6 border-b-[1px]">
        <figure className="book__image--wrapper h-[80px] w-[80px] min-w-[80px] ">
          <img
            className="book__image w-[100%] h-[100%]"
            src={imageLink}
            alt="book"
          />
        </figure>
        <div className="">
          <div className="search__book--title flex items-center font-bold ">
            {title}
          </div>
          <div className="search__book--author font-light text-sm text-gray-500 mb-2 ">{author}</div>
          <div className="search__book--duration">
            <div className="recommended__book--details flex ">
              <div className="recommended__book--details-icon text-md text-gray-500 mr-1">
                <AiOutlineClockCircle />
              </div>
              <div className="recommended__book--details-text text-sm text-gray-500 ">
                {formatTime(duration)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
