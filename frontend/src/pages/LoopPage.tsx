import { useState, useEffect, useContext } from "react";
import { Heart, Eye, X, ChevronLeft } from "lucide-react";
import { UserContext } from "@/context/UserContext";
import { FaHeart } from "react-icons/fa";

function LoopPage() {
  const [showViewers, setShowViewers] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  let { showStory, setShowStory } = useContext(UserContext);
  let [like, setLike] = useState<boolean>(true);

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

  // Story Swap Timer
  useEffect(() => {
    // Make sure user starts watching stories from first
    if (!showStory) {
      setCurrentStory(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [showStory, stories.length]);

  return (
    <>
      <div
        className={`absolute  md:top-[50px]  md:left-[40%] w-screen md:w-[450px] h-screen md:h-[600px]
          bg-linear-to-br from-blue-900 via-violet-900 to-black
          z-999 md:rounded-xl overflow-hidden shadow-2xl border border-white/10 p-4 ${
            showStory ? "" : "hidden"
          }`}
      >
        {/* Story Progress Bar */}
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

        {/* User DP + name */}
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

        {/* Story Main Section */}
        <div className="w-full h-[75%]  mt-5 md:h-[75%] rounded-lg overflow-hidden relative">
          <img
            src={stories[currentStory].img}
            className="w-full h-full object-cover"
            alt="story"
          />
        </div>

        {/* LIKE + VIEW BUTTONS  */}
        <div className="w-full h-[10%] md:mt-3 flex items-center justify-between px-5">
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

          {/* Like */}
          <button className="flex items-center gap-2 text-white cursor-pointer">
            <span className="p-2 bg-[#0d010d] rounded-full">
              <FaHeart
                className={` text-2xl ${
                  like ? "text-white" : "text-pink-700"
                }`}
                onClick={() => setLike((prev) => !prev)}
              />
            </span>
            <span>Like</span>
          </button>
        </div>

        {/* All Viewers */}
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

          {/* Persons Who viewed the stories */}
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
                <div className="flex justify-between px-5 w-full">
                  <span className="text-white text-sm">{viewer.name}</span>
                  <FaHeart className="text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoopPage;
