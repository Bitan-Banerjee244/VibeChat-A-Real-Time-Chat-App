import { useContext } from "react";
import { MessageCircle, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserContext } from "@/context/UserContext";

const persons = [
  {
    id: 1,
    name: "Alice",
    lastMessage: "Hey, how are you?",
    time: "10:30 AM",
    unread: 2,
    dp: "https://randomuser.me/api/portraits/women/68.jpg",
    isOnline : true
  },
  {
    id: 2,
    name: "Bob",
    lastMessage: "Let's meet tomorrow.",
    time: "9:45 AM",
    unread: 0,
    dp: "https://randomuser.me/api/portraits/men/32.jpg",
    isOnline : false
  },
  {
    id: 3,
    name: "Charlie",
    lastMessage: "Got it 👍",
    time: "Yesterday",
    unread: 5,
    dp: "https://randomuser.me/api/portraits/men/12.jpg",
    isOnline : true
  },
];

function PersonBar() {
  const { setShowPerson } = useContext(UserContext);

  return (
    <div className="h-full flex flex-col bg-linear-to-b from-[#2b012b] via-[#0f012f] to-black border-r-2 border-[#80808059] border-solid">
      {/* Logo */}
      <div
        className="w-full h-[10%] flex items-center ml-4 cursor-pointer"
      >
        <span
          className="text-2xl flex items-center text-white font-bold"
          onClick={() => setShowPerson(false)}
        >
          <MessageCircle className="mr-2 text-violet-400 w-8 h-88" />
          Vibe<i className="text-violet-500">Chat</i>
        </span>
      </div>

      {/* Search Input */}
      <div className="p-2">
        <InputGroup>
          <InputGroupInput placeholder="Search a user...." className="text-white"/>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Persons List */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-2">
          {persons.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-[#531653] cursor-pointer transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={person.dp}
                  alt={person.name}
                  className={`w-12 h-12 rounded-full object-cover ${person.isOnline?"border-4 border-violet-700" : ""}`}
                />
                <div className="flex flex-col">
                  <span className="text-white font-medium">{person.name}</span>
                  <span className="text-gray-300 text-sm truncate w-[150px]">
                    {person.lastMessage}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400 text-xs mb-2">{person.time}</span>
                {person.unread > 0 && (
                  <span className="bg-violet-400 text-black text-xs px-2 py-1 rounded-full mt-1">
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
