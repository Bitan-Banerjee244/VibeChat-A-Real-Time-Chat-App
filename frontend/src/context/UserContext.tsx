import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

// Define the type for your context
interface UserContextType {
  showPerson: boolean;
  setShowPerson: Dispatch<SetStateAction<boolean>>;
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

// Provide default value matching the type
export const UserContext = createContext<UserContextType>({
  showPerson: true,
  setShowPerson: () => {},
  showProfile: true,
  setShowProfile: () => {},
});

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [showPerson, setShowPerson] = useState<boolean>(true);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const value: UserContextType = {
    showPerson,
    setShowPerson,
    showProfile,
    setShowProfile,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
