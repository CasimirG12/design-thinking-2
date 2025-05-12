import React from "react";

const _scrollToSection = (docSecId: number) => {
  const el = document.getElementById(`section-${docSecId}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.focus();
  }
};

export const parseSectionReference = (input: string): React.ReactNode[] => {
  const sectionRegex = /\$sec\(([^$]+)\$([^$]+)\$\)/g;
  const parts: React.ReactNode[] = [];

  let lastIndex = 0;
  let match;

  while ((match = sectionRegex.exec(input)) !== null) {
    const [fullMatch, sectionTitle, sectionId] = match;
    const start = match.index;

    // Push preceding text
    if (start > lastIndex) {
      parts.push(input.slice(lastIndex, start));
    }

    // Push the button element
    parts.push(
      <button
        key={`section-${start}`}
        className="text-blue-400 underline hover:text-blue-600"
        onClick={() => _scrollToSection(Number(sectionId))} // Placeholder
      >
        {sectionTitle}
      </button>
    );

    lastIndex = start + fullMatch.length;
  }

  // Push any remaining text
  if (lastIndex < input.length) {
    parts.push(input.slice(lastIndex));
  }

  return parts;
};
