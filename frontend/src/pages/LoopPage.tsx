import { useState, useEffect, useContext } from "react";
import { Heart, Eye, X, ChevronLeft } from "lucide-react";
import { UserContext } from "@/context/UserContext";

function LoopPage() {
  const [showViewers, setShowViewers] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  let { showStory, setShowStory } = useContext(UserContext);

  const storyOwner = {
    name: "Riya Sharma",
    dp: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  // Dummy Story
  const stories = [
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900",
    },
    {
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900",
    },
  ];

  // Dummy Viewers
  const viewers = [
    { name: "Amit", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Sneha", img: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "John", img: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Priya", img: "https://randomuser.me/api/portraits/women/5.jpg" },
  ];

  // -------- AUTO SWAP STORY EVERY 20s --------
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }, 20000);

    return () => clearInterval(timer);
  }, [stories.length]);

  return (
    <>
      <div
        className={`absolute top-8 md:top-5 left-10 md:left-[40%] w-[300px] md:w-[450px]  h-[550px] md:h-[600px]
          bg-linear-to-br from-blue-900 via-violet-900 to-black
          z-999 rounded-xl overflow-hidden shadow-2xl border border-white/10 p-4 ${
            showStory ? "" : "hidden"
          }`}
      >
        
        {/* ------------ STORY PROGRESS BAR ------------ */}
        <div className="flex gap-1 mb-3">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 rounded-full ${
                idx === currentStory ? "bg-white" : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>

        {/* ------------ TOP-LEFT STORY OWNER ------------ */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 hover:bg-violet-700 flex justify-center items-center cursor-pointer rounded-sm"
            onClick={() => setShowStory(false)}
          >
            <ChevronLeft className="text-white  " />
          </div>

          <img
            src={storyOwner.dp}
            alt="dp"
            className="w-10 h-10 rounded-full border border-white/30"
          />
          <span className="text-white text-sm font-semibold">
            {storyOwner.name}
          </span>
        </div>

        {/* ------------ STORY IMAGE ------------ */}
        <div className="w-full h-[70%] rounded-lg overflow-hidden relative">
          <img
            src={stories[currentStory].img}
            className="w-full h-full object-cover"
            alt="story"
          />
        </div>

        {/* ------------- LIKE + VIEW BUTTONS ------------- */}
        <div className="w-full h-[15%] mt-3 flex items-center justify-between px-5">
          {/* Like */}
          <button className="flex items-center gap-2 text-white cursor-pointer">
            <span className="p-2 bg-white/10 rounded-full">
              <Heart size={22} className="text-red-400" />
            </span>
            <span>Like</span>
          </button>

          {/* Views */}
          <button
            onClick={() => setShowViewers(true)}
            className="flex items-center gap-2 text-white cursor-pointer"
          >
            <span className="p-2 bg-white/10 rounded-full">
              <Eye size={22} />
            </span>
            <span>{viewers.length} Views</span>
          </button>
        </div>

        {/* ---------- VIEWERS BAR (BOTTOM SHEET) ---------- */}
        <div
          className={`absolute bottom-0 left-0 w-full 
          bg-black/80 backdrop-blur-xl border-t border-white/20 
          rounded-t-2xl p-4 transition-all duration-300
          ${showViewers ? "translate-y-0" : "translate-y-[150%]"}
          h-60`}
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-white text-lg font-semibold">Viewers</h2>
            <button onClick={() => setShowViewers(false)}>
              <X size={22} className="text-white" />
            </button>
          </div>

          <div className="max-h-[180px] overflow-y-auto space-y-3 pr-1 scrollbar-hide">
            {viewers.map((viewer, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 bg-white/10 rounded-xl"
              >
                <img
                  src={viewer.img}
                  alt={viewer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white text-sm">{viewer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoopPage;
