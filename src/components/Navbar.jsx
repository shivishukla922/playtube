import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./utils/appSlice";
const Navbar = () => {
 const dispatch =useDispatch();
  const handleToggele=()=>{
   dispatch(toggleSidebar());
  }
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
    <div className="  flex  w-[96%] py-3 justify-between items-center">
      <div className="flex  items-center">
        <GiHamburgerMenu   onClick={handleToggele} className="cursor-pointer"/>
        <img className="px-4"
          width={"105px"}
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt=""
        />
      </div>
      <div className="flex  w-[40%]  items-center">
        <div  className="w-[100%] py-1 px-1  border border-gray-400 rounded-l-full">
          <input type="text" placeholder="Search" className="border w-full outline-none  border-none" />
        </div>
        <button className="py-2 border border-gray-400 rounded-r-full    px-4"> <CiSearch /></button>
      </div>
    
        <div className="flex items-center w-[12%]  justify-between">
          <CiVideoOn size={"24px"} />
          <IoIosNotificationsOutline size={"24px"} />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs_1DldfZUC9lOmMMI4USmKyQiKwyzoIyRQ&s" size={50} round="50px" />
        </div>
      
    </div>
    </div>
  );
};
export default Navbar;
