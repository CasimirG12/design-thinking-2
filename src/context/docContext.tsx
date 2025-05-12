import { createContext, useContext, useState, type ReactNode } from "react";
import type { DocSection, Documentation } from "../types/models";
import {
  documentations,
  sections as mockSections,
} from "../mock_data/documentations";
import { useUserContext } from "./userContext";

interface DocContextProps {
  docs: Documentation[];
  sections: DocSection[];
  addSection: (docId: number) => void;
  setSections: React.Dispatch<React.SetStateAction<DocSection[]>>;
  fetchDocs: (docs: Documentation[]) => void;
}

const DocContext = createContext<DocContextProps | undefined>(undefined);

const DocProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [docs, setDocs] = useState(documentations);
  const [sections, setSections] = useState(mockSections);
  const { currentUser } = useUserContext();

  const addSection = (docId: number) => {
    if (!currentUser) {
      throw new Error("No Current User found");
    }
    const updatedSections = [
      ...sections,
      {
        id: sections.length + 1,
        docId,
        writerIds: [currentUser.id],
        title: "",
        text: "",
        dateCreated: new Date().toISOString().split("T")[0],
        lastEdited: new Date().toISOString().split("T")[0],
        edit: true,
      },
    ];
    setSections(updatedSections);
  };

  const fetchDocs = (docs: Documentation[]) => {
    setDocs(docs);
  };

  return (
    <DocContext.Provider
      value={{ docs, sections, addSection, setSections, fetchDocs }}
    >
      {children}
    </DocContext.Provider>
  );
};

export default DocProvider;

export const useDocContext = () => {
  const context = useContext(DocContext);
  if (!context) {
    throw new Error("DocContext must be used within a DocProvider");
  }
  return context;
};
