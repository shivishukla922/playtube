import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APT_KEY from "../constant/Youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId, "id is ");
  const [singleVideo, setSingleVideo] = useState();

  const fetchSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${APT_KEY}`
      );

      setSingleVideo(res.data?.items[0]);
    } catch (err) {
      console.log(err, "error");
    }
  };
  useEffect(() => {
    fetchSingleVideo();
  }, []);
  console.log(singleVideo);
  return (
    <div className="ml-4 ">
      <iframe
        width="650"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h1 className="font-bold mt-2 text-lg">{singleVideo?.snippet?.title}</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-between w-[30%]">
          <div className="flex">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M6zzKkWrAgNLHPqA9lya6ESyGPmGdfefNQ&s"
              size={50}
              round="50px"
            />

            <h1 className="text-nowrap font-bold ml-2">{singleVideo?.snippet?.channelTitle}</h1>
          </div>
          <button className="px-4 py-2 font-medium bg-black text-white rounded-full ml-4 ">
            Subscribe
          </button>
        </div>
        <div className="flex w-[40%] items-center justify-between mt-2">
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full  cursor-pointer">
            <AiOutlineLike size="20px" className="mr-5" />
            <AiOutlineDislike size="20px" />
          </div>
          <div className="flex bg-gray-200 px-4 py-2 rounded-full ">
            <PiShareFatThin size="24px" />
            <p> Share</p>
          </div>
          <div className="flex items-center  px-3 py-3 rounded-full bg-gray-200">
            <BsThreeDots  className=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
