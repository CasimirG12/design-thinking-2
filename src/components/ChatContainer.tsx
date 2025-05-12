import React, { useEffect } from "react";
import { FaArrowLeft, FaComment, FaPaperPlane, FaX } from "react-icons/fa6";
import { useUserContext } from "../context/userContext";
import { useChat } from "../context/chatContext";
import SelectedUserChat from "./SelectedUserChat";

const ChatContainer: React.FC = () => {
  const { currentUser, users } = useUserContext();
  const {
    setChat,
    messages,
    selectedUser,
    setSelectedUser,
    resetSelectedUser,
    sendMessage,
    onMessageChange,
    messageToSend,
    chatOpen,
    setChatOpen,
    setMessageToSend,
  } = useChat();

  const selectChat = (currentUserId: number, selectedUserId: number) => {
    setChat(currentUserId, selectedUserId);
    const updatedSelectedUser = users.find(
      (user) => user.id === selectedUserId
    );
    if (!updatedSelectedUser) return;
    setSelectedUser(updatedSelectedUser);
  };

  useEffect(() => {
    if (!currentUser || messages.length === 0 || !selectedUser) return;
    selectChat(currentUser.id, selectedUser.id);
  }, [currentUser, messages, selectedUser]);

  return (
    <div className="relative text-white">
      {currentUser?.status !== "hyperfocus" ? (
        <button
          onClick={() => {
            setChatOpen(!chatOpen);
          }}
          className="flex flex-row gap-2 items-center"
        >
          <FaComment className="text-white" />
          chat
        </button>
      ) : null}
      {chatOpen && (
        <div className="absolute bottom-full mb-3 bg-zinc-900 rounded-md h-150 w-150 -right-2 text-white shadow-md shadow-black overflow-hidden">
          <div className="flex flex-row items-center justify-between w-full shadow shadow-black p-4">
            {selectedUser ? (
              <div className="flex flex-row items-center gap-2 w-full h-[10%]">
                <button onClick={resetSelectedUser} className="cursor-pointer">
                  <FaArrowLeft size={22} />
                </button>
                <h1>{`Chat with ${selectedUser?.name.split(", ")[1]}`}</h1>
              </div>
            ) : (
              <h1 className="">Chats</h1>
            )}
            <button
              onClick={() => {
                setChatOpen(false);
              }}
              className="cursor-pointer"
            >
              <FaX />
            </button>
          </div>
          <div className="flex flex-col overflow-y-auto h-[80%] p-4">
            {selectedUser ? (
              <SelectedUserChat />
            ) : (
              <div>
                {users.map((user) => {
                  if (user.id !== currentUser?.id)
                    return (
                      <div
                        className="p-2 hover:bg-zinc-800 rounded cursor-pointer hover:font-bold"
                        onClick={() => {
                          setSelectedUser(user);
                          setMessageToSend("");
                        }}
                      >
                        {user.name.split(", ")[1]}
                      </div>
                    );
                })}
              </div>
            )}
          </div>
          {selectedUser && (
            <form
              className="w-full h-[10%] flex flex-row items-center justify-evenly gap-2 p-4"
              onSubmit={(e) => sendMessage(e)}
            >
              <textarea
                className="bg-zinc-800 rounded w-auto h-auto p-2"
                cols={65}
                rows={1}
                value={messageToSend}
                onChange={(e) => onMessageChange(e, messageToSend)}
              />
              <button
                className="w-auto h-5 bg-zinc-500 p-4 flex items-center justify-center rounded"
                type="submit"
              >
                <FaPaperPlane color={"white"} />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
