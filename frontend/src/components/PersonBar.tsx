import { useContext } from "react";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserContext } from "@/context/UserContext";

const persons = [
  { id: 1, name: "Alice", lastMessage: "Hey, how are you?", time: "10:30 AM", unread: 2, dp: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 2, name: "Bob", lastMessage: "Let's meet tomorrow.", time: "9:45 AM", unread: 0, dp: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Charlie", lastMessage: "Got it 👍", time: "Yesterday", unread: 5, dp: "https://randomuser.me/api/portraits/men/12.jpg" },
];

function PersonBar() {
  const { setShowPerson } = useContext(UserContext);

  return (
    <div className="h-full flex flex-col bg-linear-to-b from-blue-950 to-black">
      {/* Logo */}
      <div
        className="w-full h-[10%] flex items-center justify-center cursor-pointer"
        onClick={() => setShowPerson(false)} // hide left panel
      >
        <span className="text-xl lg:text-2xl flex items-center text-white font-bold">
          <MessageCircle className="mr-3 text-violet-400 w-10 lg:w-8 lg:h-8" />
          Vibe<i className="text-violet-400">Chat</i>
        </span>
      </div>

      {/* Search Input */}
      <div className="p-4">
        <Input
          placeholder="Search users..."
          className="w-full text-white placeholder-gray-400 rounded-lg"
        />
      </div>

      {/* Persons List */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-2">
          {persons.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-800 cursor-pointer transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={person.dp}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-700"
                />
                <div className="flex flex-col">
                  <span className="text-white font-medium">{person.name}</span>
                  <span className="text-gray-300 text-sm truncate w-[150px]">
                    {person.lastMessage}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400 text-xs">{person.time}</span>
                {person.unread > 0 && (
                  <span className="bg-violet-400 text-black text-xs px-2 py-0.5 rounded-full mt-1">
                    {person.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default PersonBar;
