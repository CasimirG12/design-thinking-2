import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Message, MessageStatus, User } from "../types/models";
import { messages as mockMessages } from "../mock_data/messages";
import { useUserContext } from "./userContext";
import { currentUser } from "../mock_data/users";

interface ChatContextProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  selectedChat: Message[];
  setSelectedChat: React.Dispatch<React.SetStateAction<Message[]>>;
  setChat: (currentUserId: number, selectedUserId: number) => void;
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  resetSelectedUser: () => void;
  sendMessage: (e: React.FormEvent) => void;
  onMessageChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    value: string
  ) => void;
  messageToSend: string;
  chatOpen: boolean;
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageToSend: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChat, setSelectedChat] = useState<Message[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messageToSend, setMessageToSend] = useState<string>("");
  const { users } = useUserContext();
  const [chatOpen, setChatOpen] = useState(false);

  const setChat = (currentUserId: number, selectedUserId: number) => {
    const updatedSelectedUser = users.find(
      (user) => user.id === selectedUserId
    );
    if (!updatedSelectedUser) return;
    const updatedChat = messages
      .filter(
        (message) =>
          (message.recieverId === currentUserId &&
            message.senderId === selectedUserId) ||
          (message.senderId === currentUserId &&
            message.recieverId === selectedUserId)
      )
      .sort(
        (a, b) =>
          new Date(a.timeSent).getTime() - new Date(b.timeSent).getTime()
      );
    setSelectedChat(updatedChat);
    setSelectedUser(updatedSelectedUser);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageToSend.trim() === "") return;
    if (!selectedUser) {
      throw new Error("User not selected for message");
    }
    let messageStatus: MessageStatus = "sent";
    if (selectedUser.status === "hyperfocus") {
      messageStatus = "waiting";
    }
    const updatedMessages = [
      ...messages,
      {
        id: messages.length + 1,
        senderId: currentUser.id,
        recieverId: selectedUser.id,
        message: messageToSend,
        timeSent: new Date().toISOString(),
        status: messageStatus,
      },
    ];
    setMessages(updatedMessages);
    setMessageToSend("");
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageToSend(e.target.value);
  };

  const resetSelectedUser = () => {
    setSelectedUser(null);
  };

  const fetchMessages = () => {
    setMessages(mockMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    console.log("updated messages: ", messages);
  }, [messages]);

  return (
    <ChatContext.Provider
      value={{
        setMessageToSend,
        chatOpen,
        setChatOpen,
        messages,
        setMessages,
        selectedChat,
        setSelectedChat,
        setChat,
        selectedUser,
        setSelectedUser,
        resetSelectedUser,
        sendMessage,
        onMessageChange,
        messageToSend,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("Messages Context should be used withing a ChatProvider");
  }
  return context;
};
