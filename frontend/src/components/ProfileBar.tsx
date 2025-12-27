import React from "react";
import { X } from "lucide-react";

interface ProfileBarProps {
  onClose: () => void;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ onClose }) => {
  const mediaItems = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <div className="h-full w-full flex flex-col relative text-white bg-[#01011b] border-l border-[#8080804e]">

      {/* Close Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-violet-700 transition cursor-pointer"
        >
          <X className="w-6 h-6"/>
        </button>
      </div>

      {/* // Profile Details  */}
      <div className="h-1/2 flex flex-col items-center justify-center px-4 border-b-2 border-solid border-gray-800">
        {/* DP */}
        <div className="relative z-10 -mt-8">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* Name & Status */}
        <div className="mt-4 text-center z-10">
          <h2 className="text-2xl font-bold">Sahid Ghosh</h2>
          <p className="text-green-400 text-sm mt-1">● Online</p>
          <p className="text-purple-400 text-sm mt-1">@itsSahid</p>
          <p className="text-gray-300 text-sm mt-2">
            Passionate about coding, gaming, and building awesome apps!
          </p>
        </div>
      </div>


      {/* Media Section */}
      <h3 className="text-lg font-semibold m-5">Shared Media</h3>
      <div className="h-1/2 overflow-y-auto px-4 pb-4 scrollbar-hide">
        <div className="grid grid-cols-3 gap-3">
          {mediaItems.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`media-${idx}`}
              className="w-full h-24 object-cover rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default ProfileBar;
