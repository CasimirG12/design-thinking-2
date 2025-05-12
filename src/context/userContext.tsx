import { createContext, useContext, useState, type ReactNode } from "react";
import type { Status, User } from "../types/models";
import {
  users as usersMock,
  currentUser as cUserMock,
} from "../mock_data/users";

interface UserContextProps {
  users: User[];
  currentUser: User | null;
  updateStatus: (status: Status) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState(usersMock);
  const [currentUser, setCurrentUser] = useState<User | null>(cUserMock);

  const updateStatus = (status: Status): void => {
    if (!currentUser) {
      throw new Error("Current user not found");
    }
    const updatedUser = { ...currentUser, status };
    setCurrentUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, updateStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
