import { useMemo } from "react";

type Status = "available" | "hyperfocus" | "in meeting" | "offline";

export const useStatusColor = (status: Status): string => {
  return useMemo(() => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "hyperfocus":
        return "bg-violet-500";
      case "in meeting":
        return "bg-amber-500";
      case "offline":
        return "bg-zinc-800";
      default:
        return "";
    }
  }, [status]);
};
