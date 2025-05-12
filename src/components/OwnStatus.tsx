import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import { useStatusColor } from "../hooks/useStatusColors";
import SetStatusOption from "./SetStatusOption";
import { statusOptions } from "../constants/statusOptions";

const OwnStatus: React.FC = () => {
  const { currentUser, updateStatus } = useUserContext();
  const [open, setOpen] = useState(false); // Set to false initially to hide the dropdown

  // Call the hook with a fallback value to maintain consistent hook order
  const statusColor = useStatusColor(currentUser?.status ?? "offline");

  if (!currentUser) {
    return null; // or a loading spinner / fallback UI
  }

  return (
    <div className="flex flex-row items-center text-white gap-2">
      My status:
      <div className="group relative flex items-center gap-2 ">
        <span
          className={`${statusColor} w-4 h-4 inline-block rounded-full border border-zinc-500`}
        />
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-zinc-800 text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap transition-opacity duration-200 pointer-events-none">
          Status: {currentUser.status}
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {currentUser.status}
        </button>
        {open && (
          <div className="absolute bottom-full mb-2 p-2 bg-zinc-800 text-white rounded-md shadow-lg w-auto">
            {statusOptions.map((status) => (
              <SetStatusOption
                key={`key-${status}`}
                statusOption={status}
                setStatus={() => {
                  updateStatus(status);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnStatus;
