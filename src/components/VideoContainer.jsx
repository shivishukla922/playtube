import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from '../constant/Youtube'

import VideoCard from './VideoCard'
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video ,setVideo] =useState([])

  const fetchVideos =async()=>{
    try{
    const res =   await axios.get(`${YOUTUBE_VIDEO_API}`);
    console.log(res?.data?.items);
    setVideo(res?.data?.items)
    } catch(err){
      console.log(err);

    }

  }
  useEffect(()=>{
fetchVideos();
  },[]);
  return (
    <div className='grid grid-cols-3 gap-0'>
      {
        video.map((item)=>{
          return(
            <Link to ={`/watch?v=${item.id}`}  key={item.id}>
            <VideoCard  item ={item}/>
            </Link>
          )
        })
      }
    
      
    </div>
  )
}

export default VideoContainer