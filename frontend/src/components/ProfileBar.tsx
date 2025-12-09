import React from "react";
import { X } from "lucide-react";

interface ProfileBarProps {
  onClose: () => void;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ onClose }) => {
  const mediaItems = [
    "https://source.unsplash.com/random/100x100/?nature",
    "https://source.unsplash.com/random/100x100/?city",
    "https://source.unsplash.com/random/100x100/?tech",
    "https://source.unsplash.com/random/100x100/?animals",
    "https://source.unsplash.com/random/100x100/?people",
    "https://source.unsplash.com/random/100x100/?cars",
    "https://source.unsplash.com/random/100x100/?food",
    "https://source.unsplash.com/random/100x100/?mountain",
  ];

  return (
    <div className="h-full w-full flex flex-col text-white relative bg-gradient-to-b from-black via-blue-900 to-black">

      {/* Close Button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Profile Header */}
      <div className="relative flex flex-col items-center py-12">
        {/* Subtle Media Blur Behind DP */}
        <div className="absolute -top-4 w-40 h-40 rounded-full overflow-hidden z-0">
          {mediaItems.slice(0, 6).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`media-${idx}`}
              className="w-full h-full object-cover filter blur-lg scale-110"
            />
          ))}
          <div className="absolute inset-0 bg-black/50 rounded-full"></div>
        </div>

        {/* DP */}
        <div className="relative z-10">
          <img
            src="https://source.unsplash.com/random/150x150/?face"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Name, Status, Bio */}
        <div className="mt-4 text-center z-10 px-4">
          <h2 className="text-2xl font-bold">Bitan Banerjee</h2>
          <p className="text-green-400 text-sm mt-1">● Online</p>
          <p className="text-gray-300 text-sm mt-2">
            Passionate about coding, gaming, and building awesome apps!
          </p>
        </div>
      </div>

      {/* Media Section (Shared Media) */}
      <div className="flex-1 overflow-y-auto mt-6 px-4 pb-4 scrollbar-hide">
        <h3 className="text-lg font-semibold mb-3">Shared Media</h3>
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
