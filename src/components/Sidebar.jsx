import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
export const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <CiHome size="24px" />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size="24px" />,
      title: "shorts",
    },
    {
      icon: <MdOutlineSubscriptions size="24px" />,
      title: "Subscription",
    },
    {
      icon: <CiHome size="24px" />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size="24px" />,
      title: "shorts",
    },
    {
      icon: <MdOutlineSubscriptions size="24px" />,
      title: "Subscription",
    },
    {
      icon: <CiHome size="24px" />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size="24px" />,
      title: "shorts",
    },
    {
      icon: <MdOutlineSubscriptions size="24px" />,
      title: "Subscription",
    },
    {
      icon: <CiHome size="24px" />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts size="24px" />,
      title: "shorts",
    },
    {
      icon: <MdOutlineSubscriptions size="24px" />,
      title: "Subscription",
    },
  ];
 const open = useSelector((store)=>store.app.open);
  return (
    <div className={`left-0  ${open? "w-[40%]" : "w-[15%]"} p-5 h-[calc(100vh-5.625rem)] px-6 bg-white overflow-y-scroll overflow-x-hidden`}>
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className="my-1 py-3 flex  ">
            {item.icon}
            <p className=  {`ml-5 ${open ? "": 'hidden'}`} >{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
