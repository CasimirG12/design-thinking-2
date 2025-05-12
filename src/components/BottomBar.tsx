import React from "react";
import OwnStatus from "./OwnStatus";
import ChatContainer from "./ChatContainer";

const BottomBar: React.FC = () => {
  return (
    <div className="w-screen h-[3vh] bg-zinc-900 border border-zinc-500 px-4 flex flex-row justify-between">
      <OwnStatus />
      <ChatContainer />
    </div>
  );
};

export default BottomBar;
