import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import APT_KEY from "../constant/Youtube";



const VideoCard = ({ item }) => {
  const [ ytIcon ,setytIcon] = useState("")
  const fetchProfilePhoto = async() => {
    try {
      const res =   await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key= ${APT_KEY} `
      );
      setytIcon(res.data.items[0].snippet.thumbnails.high.url);
      console.log(res,'asd')
    } catch (err) {
      console.log(err,'error')
    }
  };
  useEffect(()=>{
    fetchProfilePhoto();
  },[])
  return (
    <div className="w-94 mt-3 ml-3 cursor-pointer">
      <img
        className="rounded-xl w-[96%] "
        src={item.snippet.thumbnails.medium.url}
      />
      <div>
        <div className="flex ">
          <Avatar
            src={ytIcon}
            size={50}
            round="50px"
          />

          <div>
            <h1 className="font-bold  ml-2">{item.snippet.title}</h1>
            <p className="text-sm text-gray-500 ml-2">
              {item.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
