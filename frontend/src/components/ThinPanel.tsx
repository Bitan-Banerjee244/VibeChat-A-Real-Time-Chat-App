import { MessageCircle, Repeat2, LogOut } from "lucide-react";
import profileImg from "../assets/image.png";

function ThinPanel() {
  return (
    <>
      <div className="w-full h-full bg-gray-800 flex justify-between py-4 flex-col">
        <div
          id="mainIcons"
          className="w-full h-[25%] flex justify-around items-center flex-col text-white"
        >
          <MessageCircle className="cursor-pointer"/>
          <Repeat2 className="cursor-pointer"/>
          <img
            src={profileImg}
            alt=""
            className="w-[30px] h-[30px] overflow-hidden object-cover rounded-[50%] cursor-pointer"
          />
        </div>
        <div className="w-full h-[10%] flex justify-center items-center text-red-500">
          <LogOut />
        </div>
      </div>
    </>
  );
}

export default ThinPanel;
