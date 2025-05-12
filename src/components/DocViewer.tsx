import React from "react";
import { useDocContext } from "../context/docContext";
import SectionContainer from "./SectionContainer";

const DocViewer: React.FC = () => {
  const { sections } = useDocContext();
  return (
    <div className="w-full bg-zinc-800 px-4 pt-4 overflow-y-auto">
      {sections.map((section, index) => (
        <SectionContainer key={`s-${index}`} index={index} section={section} />
      ))}
    </div>
  );
};

export default DocViewer;
