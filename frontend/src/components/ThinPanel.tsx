import { MessageCircle, Repeat2, LogOut } from "lucide-react";
import profileImg from "../assets/image.png";

function ThinPanel() {
  return (
    <>
      <div className="w-full h-full bg-black border-r-2 border-[#8080805f] border-solid flex justify-between py-4 flex-col">
        <div
          id="mainIcons"
          className="w-full h-[15%] flex justify-around items-center flex-col text-white"
        >
          <div className="cursor-pointer w-10 h-10  bg-violet-700 rounded-[50%] flex justify-center items-center">
            <MessageCircle />
          </div>
          <div className="cursor-pointer w-10 h-10  rounded-[50%] flex justify-center items-center">
            <Repeat2 />
          </div>
       
        </div>
        <div className="w-full h-[15%] flex justify-around items-center text-red-500 flex-col">
             <img
            src={profileImg}
            alt=""
            className="w-[35px] h-[35px] overflow-hidden object-cover rounded-[50%] cursor-pointer"
          />
          <LogOut />
        </div>
      </div>
    </>
  );
}

export default ThinPanel;
