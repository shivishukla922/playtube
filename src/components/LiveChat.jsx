import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "./utils/helper";


const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch =useDispatch();
  useEffect(()=>{
  const timer=  setInterval(()=>{
      dispatch(setMessage({name:generateRandomName(),message:generateRandomMsg(16)}));
    },500)
    return(()=>{
      clearInterval(timer);
    })
  },[])
  return (
    <div className="px-2 py-2">
      <div>
      {message.map((item, index) => (
          <ChatMessage key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
