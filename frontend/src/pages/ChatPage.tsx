import PersonBar from "@/components/PersonBar";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import ThinPanel from "@/components/ThinPanel";
import ChatPageMain from "@/components/ChatPageMain";
import ProfileBar from "@/components/ProfileBar";

function ChatPage() {
  const { showPerson, setShowPerson, showProfile, setShowProfile } =
    useContext(UserContext);

  return (
    <div className="h-screen w-screen flex relative overflow-hidden">
      {/* Far-left thin panel */}
      <div className="hidden md:flex w-[4%] z-20">
        <ThinPanel />
      </div>

      {/* Left Panel */}
      <div
        className={`fixed md:static top-0 left-[4%] h-full bg-blue-400 z-30 transition-all duration-300 overflow-hidden
          ${showPerson ? "w-full md:w-[25%]" : "w-0"}
        `}
      >
        <PersonBar />
      </div>

      {/* Middle Chat Area */}
      <div
        className={`flex-1 bg-blue-600 transition-all duration-300 relative z-10`}
      >
        <div className="flex">
          <ChatPageMain />
        </div>

        {/* <div className="p-4 text-white">Chat Area</div> */}
      </div>

      {/* Right Profile Panel */}
      {/* Right Profile Panel */}
      <div
        className={`fixed md:static top-0 right-0 h-full bg-blue-800 z-30 transition-all duration-300 overflow-hidden
    ${showProfile ? "w-full md:w-[25%]" : "w-0"}
  `}
      >
        <ProfileBar onClose={() => setShowProfile(false)} />
      </div>
    </div>
  );
}

export default ChatPage;
