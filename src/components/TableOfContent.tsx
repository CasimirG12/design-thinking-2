import React, { useEffect, useState } from "react";
import { type DocSection, type Documentation } from "../types/models";
import { useDocContext } from "../context/docContext";
import { useSectionRefs } from "../context/sectionRefsContext";

interface TableOfContentProps {
  doc: Documentation;
}

const TableOfContent: React.FC<TableOfContentProps> = ({ doc }) => {
  const { activeIndices } = useSectionRefs();
  const { sections } = useDocContext();
  const [docSections, setDocSections] = useState<DocSection[]>([]);

  const scrollToSection = (docSecId: number) => {
    const el = document.getElementById(`section-${docSecId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus();
    }
  };

  useEffect(() => {
    const updatedSections = sections.filter(
      (section) => section.docId === doc.id
    );
    setDocSections(updatedSections);
  }, [sections, doc.id]);

  return (
    <div className="flex flex-col">
      {docSections.map((docSec, index) => {
        const isActive = activeIndices.has(index); // Check if the section is active

        return (
          <span
            key={`docSecNav-${docSec.id}`}
            className={`cursor-pointer ${
              isActive ? "text-white" : "text-zinc-500"
            }`}
            onClick={() => scrollToSection(docSec.id)}
          >
            {`${index + 1}. ${docSec.title}`}
          </span>
        );
      })}
    </div>
  );
};

export default TableOfContent;
