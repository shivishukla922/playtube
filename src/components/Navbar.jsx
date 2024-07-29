import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSidebar,
} from "./utils/appSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../constant/Youtube";
const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { searchSuggestion } = useSelector((store) => store.app);
  const [suggestion, setSuggestion] = useState(false);
  const handleToggele = () => {
    dispatch(toggleSidebar());
  };
  const searchVideo = () => {
    dispatch(setCategory(input));
  };
  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      console.log(res.data[1]);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (err) {
      console.log(err, "error");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  const openSuggestion = () => {
    setSuggestion(true);
  };
  return (
    <div className="flex  top-0 justify-center items-center w-[100%] z-10 bg-white">
      <div className="  flex  w-[96%] py-3 justify-between items-center">
        <div className="flex  items-center">
          <GiHamburgerMenu onClick={handleToggele} className="cursor-pointer" />
          <img
            className="px-4"
            width={"105px"}
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            alt=""
          />
        </div>
        <div className="flex  w-[40%]  items-center">
          <div className="   flex w-[100%] ">
            <input
              onFocus={openSuggestion}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Search"
              className=" w-full outline-none py-2 px-4  border border-gray-400 rounded-l-full"
            />

            <button
              onClick={searchVideo}
              className="py-2 border border-gray-400 rounded-r-full    px-4"
            >
              {" "}
              <CiSearch />
            </button>
          </div>
          {suggestion && searchSuggestion.length != 0 && (
            <div className="absolute  top-3 z-50 bg-white w-[30%] py-5 shadow-lg mt-12 rounded-lg border-l-gray-200">
              <ul>
                {searchSuggestion.map((text, index) => {
                  return (
                    <div className=" flex items-center px-4 hover:bg-gray-100">
                      <CiSearch />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center w-[12%]  justify-between">
          <CiVideoOn size={"24px"} />
          <IoIosNotificationsOutline size={"24px"} />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9M6zzKkWrAgNLHPqA9lya6ESyGPmGdfefNQ&s"
            size={50}
            round="50px"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
