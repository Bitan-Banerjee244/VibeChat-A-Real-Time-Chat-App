import PersonBar from "@/components/PersonBar";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import ThinPanel from "@/components/ThinPanel";
import ChatPageMain from "@/components/ChatPageMain";
import ProfileBar from "@/components/ProfileBar";
import { Check, X } from "lucide-react";

// Dummy Friend Request
const requests = [
  {
    id: 1,
    name: "Alex Roy",
    mutual: "3 mutual friends",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    mutual: "5 mutual friends",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rohan Das",
    mutual: "1 mutual friend",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

function ChatPage() {
  const { showPerson, showProfile, setShowProfile } = useContext(UserContext);
  let [showFriendRequest,setShowFriendRequest] = useState<Boolean>(false)

  return (
    <div className="h-screen w-screen flex  relative overflow-hidden ">
      <div
        className={`
        w-[350px] md:w-[400px]
        p-4
        rounded-xl
        bg-linear-to-br from-blue-900 via-black to-violet-900
        border border-white
        shadow-lg
        text-white
        absolute z-999 top-15 left-15 
          ${showFriendRequest?"block":"hidden"}
      `}
      >
        <h2 className="text-lg font-semibold mb-4">Friend Requests</h2>

        {/* Show Friend Request Button */}
        <div className="flex flex-col gap-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="
              flex items-center justify-between
              bg-white/5
              p-3 rounded-lg border border-white/10
            "
            >
              {/* Left side : image + text */}
              <div className="flex items-center gap-3">
                <img
                  src={req.img}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{req.name}</p>
                  <p className="text-xs text-gray-300">{req.mutual}</p>
                </div>
              </div>

              {/* Right side : buttons */}
              <div className="flex gap-2">
                {/* Accept */}
                <button
                  className="
                  p-2 rounded-full 
                  bg-green-500/20 border border-green-400/40
                  hover:bg-green-500/30 transition
                "
                >
                  <Check size={18} className="text-green-400" />
                </button>

                {/* Reject */}
                <button
                  className="
                  p-2 rounded-full
                  bg-red-500/20 border border-red-400/40
                  hover:bg-red-500/30 transition
                "
                >
                  <X size={18} className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
      {/* Far-left thin panel */}
      <div className="hidden md:flex md:w-[4%] z-20"
      onClick={()=>setShowFriendRequest(prev=>!prev)}
      >
        <ThinPanel />
      </div>

      {/* Left Panel */}
      <div
        className={`fixed md:static top-0 left-0 md:left-[4%] h-full bg-blue-400 z-30 transition-all duration-300 overflow-hidden
          ${showPerson ? "w-full md:w-[25%]" : "w-0"}
        `}
      >
        <PersonBar />
      </div>

      {/* Middle Chat Area */}
      <div
        className={`flex-1 bg-blue-600 transition-all duration-300 relative z-10`}
      >
        <ChatPageMain />
      </div>

      {/* Right Profile Panel */}
      <div
        className={`fixed md:static top-0 right-0 h-full bg-blue-800 z-30 transition-all duration-300 overflow-hidden ${
          showProfile ? "w-full md:w-[25%]" : "w-0"
        }`}
      >
        <ProfileBar onClose={() => setShowProfile(false)} />
      </div>
    </div>
  );
}

export default ChatPage;
