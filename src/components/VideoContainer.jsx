import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from '../constant/Youtube'
import { APT_KEY } from '../constant/Youtube'
import VideoCard from './VideoCard'

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
            <VideoCard key={item.id} item ={item}/>
          )
        })
      }
    
      
    </div>
  )
}

export default VideoContainer