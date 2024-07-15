import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
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
      title: "You",
    },
  ];
  return (
    <div className="px-4">
      {sidebarItems.map((item, index) => {
        return (
          <div  key= {index} className="my-1 py-3  ">
            {item.icon}
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
