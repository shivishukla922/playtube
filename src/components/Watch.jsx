import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APT_KEY from "../constant/Youtube";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "./utils/chatSlice";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState();
  const [input ,setInput] = useState("");

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
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSingleVideo();
  }, [videoId]);
  const sendMessage =()=>{
    dispatch(setMessage({name:"Shivi",message:input}));
    setInput("");
  }
  return (
    <div className="ml-4 flex flex-col md:flex-row w-full">
      <div className="flex flex-col w-full md:w-3/4">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?&`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">{singleVideo?.snippet?.title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center w-2/5">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M6zzKkWrAgNLHPqA9lya6ESyGPmGdfefNQ&s"
              size={50}
              round="50px"
            />
            <h1 className="font-bold ml-2">{singleVideo?.snippet?.channelTitle}</h1>
            <button className="px-4 py-2 font-medium bg-black text-white rounded-full ml-4 ">
              Subscribe
            </button>
          </div>
          <div className="flex w-3/5 items-center justify-between">
            <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full cursor-pointer ml-4">
              <AiOutlineLike size="20px" className="mr-2" />
              <AiOutlineDislike size="20px" />
            </div>
            <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
              <PiShareFatThin size="24px" />
              <p className="ml-2">Share</p>
            </div>
            <div className="flex items-center px-3 py-3 rounded-full bg-gray-200">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0 border border-gray-300 ml-6 h-fit p-4">
        <div className="flex items-center justify-between">
          <h1>Top Chat</h1>
          <BsThreeDotsVertical />
        </div>
        <div className="overflow-y-auto h-[28rem]  flex flex-col-reverse">
          <LiveChat/>
        </div>
        <div className="flex items-center justify-between border-t p-2">
        <div className="flex items-center w-[90%] ">
          <div>
            <Avatar src=""  size={40} round="50px"/>
          </div>
          <input  value={input} onChange={ ((e)=>{
            setInput(e.target.value)
          })} className="border-b border-gray-300 outline-none ml-2" type="text" placeholder="Send message" />
          <div  className="bg-gray-200 cursor-pointer p-2 rounded-full mb-2">
          <IoMdSend className=""  onClick={sendMessage}/>
          </div>

        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Watch;
