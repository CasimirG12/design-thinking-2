import React, { createContext, useState, useContext } from "react";

interface SectionRefsContextType {
  activeIndices: Set<number>;
  setActiveIndices: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const SectionRefsContext = createContext<SectionRefsContextType | undefined>(
  undefined
);

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error("useSectionRefs must be used within a SectionRefsProvider");
  }
  return context;
};

export const SectionRefsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  return (
    <SectionRefsContext.Provider value={{ activeIndices, setActiveIndices }}>
      {children}
    </SectionRefsContext.Provider>
  );
};
