import { useState, useRef, useEffect, useContext } from "react";
import { Send, Image, FileText, Smile, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserContext";

interface Message {
  id: number;
  text?: string;
  sender: "me" | "bot";
  time: string;
  avatar: string;
  image?: string;
}

function ChatPageMain() {
  const { showPerson, setShowPerson, setShowProfile } = useContext(UserContext);

  // Dummy Messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello Bitan! How can I help you today?",
      sender: "bot",
      time: "10:25 AM",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      text: "I want to build an advanced chat UI.",
      sender: "me",
      time: "10:26 AM",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      text: "Check this image!",
      sender: "bot",
      time: "10:27 AM",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80",
    },
  ]);

  const [input, setInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending message
  const sendMessage = () => {
    if (!input.trim() && !imageFile) return;

    let imageUrl;
    if (imageFile) {
      // For demo, use local image preview
      imageUrl = URL.createObjectURL(imageFile);
    }

    const newMsg: Message = {
      id: messages.length + 1,
      text: input || undefined,
      image: imageUrl,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    };

    setMessages([...messages, newMsg]);
    setInput("");
    setImageFile(null);
  };

  return (
    <div className="h-screen w-full bg-linear-to-b from-[#020617] via-[#25062c] to-[#020230] text-white flex flex-col">
      
      {/* ---------------- TOP NAVBAR ---------------- */}
      <div className="w-full p-4 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-gray-700">
        {/* LEFT SIDE BUTTONS */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-violet-700 cursor-pointer"
            onClick={() => setShowPerson(!showPerson)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="w-12 h-12 rounded-full border border-gray-600 cursor-pointer"
            alt="profile"
            onClick={() => setShowProfile((prev) => !prev)}
          />
          <div>
            <h2 className="font-semibold text-lg">Sahid Ghosh</h2>
            <p className="text-green-400 text-sm">● Online</p>
          </div>
        </div>
      </div>

      {/* ---------------- CHAT AREA ---------------- */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender !== "me" && (
              <img
                src={msg.avatar}
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
            )}

            <div
              className={`max-w-[60%] p-3 rounded-xl shadow-md flex flex-col gap-2 ${
                msg.sender === "me"
                  ? "bg-violet-600 text-white rounded-br-none"
                  : "bg-gray-800 text-gray-200 rounded-bl-none"
              }`}
            >
              {msg.image && (
                <img
                  src={msg.image}
                  alt="sent"
                  className="w-full max-h-60 object-cover rounded-lg"
                />
              )}
              {msg.text && <p>{msg.text}</p>}
              <p className="text-xs text-gray-300 text-right mt-1">
                {msg.time}
              </p>
            </div>

            {msg.sender === "me" && (
              <img
                src={msg.avatar}
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* ---------------- INPUT BOX ---------------- */}
      <div className="p-4 flex items-center gap-3 bg-black/40 backdrop-blur-lg border-t border-gray-700">
        {/* Upload Image */}
        <label className="cursor-pointer">
          <Image className="w-6 h-6 text-gray-300 hover:text-white" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files && setImageFile(e.target.files[0])}
          />
        </label>

        <Button
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-violet-700 cursor-pointer"
        >
          <FileText className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          className="text-gray-300 hover:text-white  hover:bg-violet-700 cursor-pointer"
        >
          <Smile className="w-6 h-6" />
        </Button>

        <Input
          className="flex-1 bg-gray-900 text-white border-gray-600"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <Button
          onClick={sendMessage}
          className="bg-violet-500  text-white px-4  hover:bg-violet-700 cursor-pointer"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default ChatPageMain;
