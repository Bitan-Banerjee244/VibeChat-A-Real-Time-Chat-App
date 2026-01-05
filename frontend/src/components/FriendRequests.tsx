import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";

// Dummy Friend Request Data
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

interface FriendRequests {
  showFriendRequest: boolean;
  setShowFriendRequest: React.Dispatch<React.SetStateAction<boolean>>;
}

function FriendRequests({
  showFriendRequest,
  setShowFriendRequest,
}: FriendRequests) {

  
  const friendReqRef = useRef<HTMLDivElement | null>(null);

  // Remove the Bar on click of outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        friendReqRef.current &&
        !friendReqRef.current.contains(e.target as Node)
      ) {
        setShowFriendRequest(false);
      }
    };

    if (showFriendRequest) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFriendRequest, setShowFriendRequest]);

  return (
    <>
      <div
        ref={friendReqRef}
        className={`
        w-[300px] md:w-[400px]
        p-4
        max-h-[500px]
        overflow-y-scroll scrollbar-hide
        rounded-xl
        bg-linear-to-br from-blue-900 via-black to-violet-900
        border border-white
        shadow-lg
        text-white
        absolute z-999 top-30 md:top-15 left-10 md:left-15 
        ${showFriendRequest ? "block" : "hidden"}
      `}
      >
        <h2 className="text-lg font-semibold mb-4">Friend Requests</h2>

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
    </>
  );
}

export default FriendRequests;
