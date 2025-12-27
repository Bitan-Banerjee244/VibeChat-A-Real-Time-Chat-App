import { SearchIcon, UserPlus } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import type React from "react";
import { useEffect, useRef, useState } from "react";

// Dummy Send Friend Request Data
const dummyUsers = [
  {
    id: "u101",
    name: "Alex Roy",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "u102",
    name: "Priya Sharma",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "u103",
    name: "Rohan Das",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: "u104",
    name: "Sana Kapoor",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "u105",
    name: "Vikram Singh",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

interface SendFriendRequest {
  sendFriendRequest: boolean;
  setSendFriendRequest: React.Dispatch<React.SetStateAction<boolean>>;
}

function SendFriendRequest({
  sendFriendRequest,
  setSendFriendRequest,
}: SendFriendRequest) {

  const sendFriendReq = useRef<HTMLDivElement | null>(null);

  // Remove the Bar on click of outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sendFriendReq.current &&
        !sendFriendReq.current.contains(e.target as Node)
      ) {
        setSendFriendRequest(false);
      }
    };

    if (sendFriendRequest) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sendFriendRequest, setSendFriendRequest]);

  return (
    <>
      <div
        ref={sendFriendReq}
        className={`w-[300px] md:w-[400px] p-4 h-[450px]  rounded-xl bg-linear-to-br from-blue-900 via-black to-violet-900 border border-white shadow-lg text-white absolute z-50 top-22 md:top-17 left-10 md:left-15 ${
          sendFriendRequest ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-[25%]">
          <h2 className="text-lg font-semibold mb-4 ml-3">All Users</h2>
          <div className="px-2 py w-full mb-7">
            <InputGroup>
              <InputGroupInput
                placeholder="Search a user...."
                className="text-white"
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full h-[70%] overflow-y-scroll scrollbar-hide">
          {dummyUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10"
            >
              {/* Left: Avatar + Info */}
              <div className="flex items-center gap-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-300">ID: {user.id}</p>
                </div>
              </div>

              {/* Right: Friend request icon */}
              <div className="p-2 rounded-full bg-green-500/20 border border-green-400/40">
                <UserPlus size={18} className="text-green-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SendFriendRequest;
