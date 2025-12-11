import PersonBar from "@/components/PersonBar";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import ThinPanel from "@/components/ThinPanel";
import ChatPageMain from "@/components/ChatPageMain";
import ProfileBar from "@/components/ProfileBar";
import FriendRequests from "@/components/FriendRequests";
import SendFriendRequest from "@/components/SendFriendRequest";


function ChatPage() {
  const { showPerson, showProfile, setShowProfile } = useContext(UserContext);
  let [showFriendRequest, setShowFriendRequest] = useState<boolean>(false);
  let [sendFriendRequest, setSendFriendRequest] = useState<boolean>(false);

  return (
    <div
      className="h-screen w-screen flex  relative overflow-hidden "
      id="personbar"
    >
      {/* Show Friend Request Bar */}
      <FriendRequests showFriendRequest={showFriendRequest} />

      {/* Showing All Person by userid Bar */}
      <SendFriendRequest sendFriendRequest={sendFriendRequest}/>

      {/* Far-left thin panel */}
      <div className="hidden md:flex md:w-[4%] z-20">
        <ThinPanel
          setShowFriendRequest={setShowFriendRequest}
          setSendFriendRequest={setSendFriendRequest}
          showFriendRequest={showFriendRequest}
          sendFriendRequest={sendFriendRequest}
        />
      </div>

      {/* Left Panel */}
      <div
        className={`fixed md:static top-0 left-0 md:left-[4%] h-full bg-blue-400 z-30 transition-all duration-300 overflow-hidden
          ${showPerson ? "w-full md:w-[25%]" : "w-0"}`}
      >
        <PersonBar
          setShowFriendRequest={setShowFriendRequest}
          setSendFriendRequest={setSendFriendRequest}
          showFriendRequest={showFriendRequest}
          sendFriendRequest={sendFriendRequest}
        />
      </div>

      {/* Middle Chat Area */}
      <div className={`flex-1 bg-blue-600 transition-all duration-300 relative z-10`}>
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
