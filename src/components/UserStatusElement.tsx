import React from "react";
import type { User } from "../types/models";
import { useStatusColor } from "../hooks/useStatusColors";
import { useChat } from "../context/chatContext";

interface UserStatusElementProps {
  user: User;
}

const UserStatusElement: React.FC<UserStatusElementProps> = ({ user }) => {
  const { name, status } = user;
  const statusColor = useStatusColor(status);
  const { setChatOpen, setSelectedUser, setMessageToSend } = useChat();

  return (
    <div
      className="flex flex-row items-center gap-4 hover:text-zinc-400 cursur-pointer"
      onClick={() => {
        setChatOpen(true);
        setSelectedUser(user);
        setMessageToSend("");
        console.log(user);
      }}
    >
      <div className="relative group flex items-center">
        <span
          className={`${statusColor} w-4 h-4 inline-block rounded-full border border-zinc-500`}
        />
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-zinc-800 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap transition-opacity duration-200 pointer-events-none">
          Status: {status}
        </div>
      </div>

      <p>{name}</p>
    </div>
  );
};

export default UserStatusElement;
