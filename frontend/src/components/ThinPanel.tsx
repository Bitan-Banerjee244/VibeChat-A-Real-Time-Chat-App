import { MessageCircle, LogOut, Bell } from "lucide-react";
import profileImg from "../assets/image.png";
import { MdGroup } from "react-icons/md";

type FriendRequestProps = {
  setShowFriendRequest: React.Dispatch<React.SetStateAction<boolean>>;
  setSendFriendRequest: React.Dispatch<React.SetStateAction<boolean>>;
  showFriendRequest:boolean;
  sendFriendRequest:boolean;
};

function ThinPanel({
  setShowFriendRequest,
  setSendFriendRequest,
  showFriendRequest,
  sendFriendRequest
}: FriendRequestProps) {
  return (
    <>
      <div className="w-full h-full bg-black border-r-2 border-[#8080805f] border-solid flex justify-between py-4 flex-col">
        {/* To Part : Chats + Loop */}
        <div
          id="mainIcons"
          className="w-full h-[25%] flex justify-around items-center flex-col text-white"
        >
          <div className="cursor-pointer w-10 h-10  bg-violet-700 rounded-[50%] flex justify-center items-center">
            <MessageCircle />
          </div>

          <div
            className={`cursor-pointer w-10 h-10  rounded-[50%] flex justify-center items-center ${showFriendRequest ? "bg-violet-700" : ""}`}
            onClick={() => {
              setShowFriendRequest((prev) => !prev);
              setSendFriendRequest(false);
            }}
          >
            <Bell />
          </div>

          <div
            className={`cursor-pointer w-10 h-10  rounded-[50%] flex justify-center items-center ${sendFriendRequest ? "bg-violet-700":""}`}
            onClick={() => {setSendFriendRequest((prev) => !prev)
               setShowFriendRequest(false);
            }}
          >
            <MdGroup className="w-6 h-6" />
          </div>
        </div>

        {/* Bottom Part LogOut + Profile */}
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
