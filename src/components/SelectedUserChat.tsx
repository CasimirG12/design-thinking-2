import React from "react";
import { useChat } from "../context/chatContext";
import { useUserContext } from "../context/userContext";
import { parseSectionReference } from "../utils/sectionLinkParser";

const chatBubbleStyle = "p-2 m-4 rounded";

const SelectedUserChat: React.FC = () => {
  const { selectedChat } = useChat();
  const { currentUser } = useUserContext();
  return (
    <>
      {selectedChat?.map((message) =>
        currentUser?.id === message.recieverId ? (
          <div className="w-full flex flex-row">
            <div
              key={`msg-${message.id}`}
              className={`${chatBubbleStyle} bg-indigo-900`}
            >
              <p>{message.message}</p>
              <p className="text-zinc-400">
                {new Date(message.timeSent).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row-reverse">
            <div
              key={`msg-${message.id}`}
              className={`${chatBubbleStyle} ${
                message.status === "waiting" ? "bg-gray-500" : "bg-teal-900"
              }`}
            >
              <p>{parseSectionReference(message.message)}</p>
              <p className="text-zinc-400">
                {new Date(message.timeSent).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              {message.status === "waiting" && (
                <p className="text-gray-800 font-bold">
                  reciever is in hyper focus, message is put on waiting list
                </p>
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SelectedUserChat;
