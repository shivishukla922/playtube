import React, { useEffect } from 'react'
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from '../constant/Youtube'
import { APT_KEY } from '../constant/Youtube'

const VideoContainer = () => {

  const fetchVideos =async()=>{
    try{
    const res =   await axios.get(`${YOUTUBE_VIDEO_API}`);
    console.log(res,'video response is')
    } catch(err){
      console.log(err);

    }

  }
  useEffect(()=>{
fetchVideos();
  },[]);
  return (
    <div></div>
  )
}

export default VideoContainer