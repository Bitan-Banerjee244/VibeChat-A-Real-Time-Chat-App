import { useState, useRef, useEffect, useContext } from "react";
import { Send, Image, FileText, Smile, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserContext";

function ChatPageMain() {
  const { showPerson, setShowPerson, setShowProfile } =
    useContext(UserContext);

  const [messages, setMessages] = useState([
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
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    };

    setMessages([...messages, newMsg]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen w-full bg-linear-to-b from-[#020617] via-[#0a0f37] to-black text-white flex flex-col">

      {/* ---------------- TOP NAVBAR ---------------- */}
      <div className="w-full p-4 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-gray-700">

        {/* LEFT SIDE BUTTONS */}
        <div className="flex items-center gap-3">
          {/* Toggle Left Sidebar */}
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white"
            onClick={() => setShowPerson(!showPerson)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Profile Picture triggers right profile panel */}
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="w-12 h-12 rounded-full border border-gray-600 cursor-pointer"
            alt="profile"
            onClick={() => setShowProfile(prev => !prev)}
          />
          <div>
            <h2 className="font-semibold text-lg">Bitan</h2>
            <p className="text-green-400 text-sm">● Online</p>
          </div>
        </div>
      </div>

      {/* ---------------- CHAT AREA ---------------- */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
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
              className={`max-w-[60%] p-3 rounded-xl shadow-md ${
                msg.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-800 text-gray-200 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-xs text-gray-300 text-right mt-1">{msg.time}</p>
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

        <Button variant="ghost" className="text-gray-300 hover:text-white">
          <Image className="w-6 h-6" />
        </Button>

        <Button variant="ghost" className="text-gray-300 hover:text-white">
          <FileText className="w-6 h-6" />
        </Button>

        <Button variant="ghost" className="text-gray-300 hover:text-white">
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default ChatPageMain;
