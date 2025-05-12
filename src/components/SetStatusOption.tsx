import React from "react";
import type { Status } from "../types/models";

interface SetStatusOptionProps {
  statusOption: Status;
  setStatus: () => void;
}

const SetStatusOption: React.FC<SetStatusOptionProps> = ({
  statusOption,
  setStatus,
}) => {
  return (
    <div
      className="cursor-pointer text-center px-2 py-1 hover:bg-zinc-600 rounded-sm"
      onClick={setStatus}
    >
      {statusOption}
    </div>
  );
};

export default SetStatusOption;
