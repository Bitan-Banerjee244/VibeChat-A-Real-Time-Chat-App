import React, { useState, useRef } from "react";
import { Image, SquarePen, User } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

const CreateProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (file: File) => {
    setProfileImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!username.trim()) {
      alert("Please enter a username!");
      return;
    }
    console.log({ username, bio, profileImage });
    alert("Profile submitted!");
  };

  return (
    <div className="h-[65%] md:h-full w-full flex items-center justify-center bg-linear-to-br from-[#010111] via-[#1a0f3c] to-[#020217] p-4 rounded-lg">
      <div className="w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Image Upload */}
        <div
          className="md:w-1/3 w-full flex flex-col items-center justify-center p-6 cursor-pointer transition relative"
          onClick={() => inputRef.current?.click()}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-violet-500"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <Image className="w-12 h-12 mb-2" />
              <span>Upload Photo</span>
            </div>
          )}
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleImageChange(e.target.files[0]);
              }
            }}
          />
        </div>

        {/* Right Side - Inputs */}
        <div className="md:w-2/3 w-full p-6 md:p-8 flex flex-col gap-6">
          <div>
            <label className="flex items-center gap-2 mb-1 text-gray-300">
              Username
            </label>
            <InputGroup>
              <InputGroupInput
                placeholder="@iamThomas"
                className="text-white w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputGroupAddon>
                <User className="w-5 h-5" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <label className="flex items-center gap-2 mb-1 text-gray-300">
              Bio
            </label>
            <InputGroup>
              <InputGroupInput
                placeholder="e.g. Hardwork pays off"
                className="text-white w-full"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <InputGroupAddon>
                <SquarePen />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg rounded-lg mt-auto cursor-pointer"
          >
            Submit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
