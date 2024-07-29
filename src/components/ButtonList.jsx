import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "./utils/appSlice";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Mixes",
    "Technology",
    "Javascript",
    "Jukebox",
    "Coding",
    "Java",
    "News",
    "Cricket",
    "Comedy",
  ];
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const videoByTag = (tag) => {
    if (active != tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };
  return (
    <div className="flex py-4 w-[100%] ">
      {buttonList.map((item, index) => {
        return (
          <div>
            <button
              onClick={() => {
                videoByTag(item);
              }}
              key={index}
              className={`${
                active == item ? "bg-slate-900 text-white" : "bg-gray-200"
              }  px-3 py-1 mx-2 font-medium cursor-pointer rounded-lg`}
            >
              {" "}
              <span className="whitespace-nowrap">{item}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
