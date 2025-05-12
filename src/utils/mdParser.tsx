import React from "react";

export const mdParser = (inputString: string): React.ReactNode[] => {
  const lines = inputString.split("\n");
  const output: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let inOrderedList = false;
  let inUnorderedList = false;

  const parseInline = (text: string) => {
    // Bold: **text**
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic: *text*
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Link: [text](url)
    text = text.replace(
      /\[(.*?)\]\((.*?)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
    );
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Headings
    if (/^#{3} /.test(trimmed)) {
      output.push(
        <h3 key={index}>{parseInline(trimmed.replace(/^#{3} /, ""))}</h3>
      );
    } else if (/^#{2} /.test(trimmed)) {
      output.push(
        <h2 key={index}>{parseInline(trimmed.replace(/^#{2} /, ""))}</h2>
      );
    } else if (/^# /.test(trimmed)) {
      output.push(
        <h1 key={index}>{parseInline(trimmed.replace(/^# /, ""))}</h1>
      );
    }
    // Ordered List
    else if (/^\d+\. /.test(trimmed)) {
      if (!inOrderedList) {
        listItems = [];
        inOrderedList = true;
        inUnorderedList = false;
      }
      listItems.push(
        <li key={index}>{parseInline(trimmed.replace(/^\d+\. /, ""))}</li>
      );
    }
    // Unordered List
    else if (/^[-*] /.test(trimmed)) {
      if (!inUnorderedList) {
        listItems = [];
        inUnorderedList = true;
        inOrderedList = false;
      }
      listItems.push(
        <li key={index}>{parseInline(trimmed.replace(/^[-*] /, ""))}</li>
      );
    }
    // End of list
    else {
      if (inOrderedList) {
        output.push(<ol key={`ol-${index}`}>{listItems}</ol>);
        inOrderedList = false;
      } else if (inUnorderedList) {
        output.push(<ul key={`ul-${index}`}>{listItems}</ul>);
        inUnorderedList = false;
      }

      // Paragraph
      if (trimmed !== "") {
        output.push(<p key={index}>{parseInline(trimmed)}</p>);
      }
    }
  });

  // Add remaining list if any
  if (inOrderedList) output.push(<ol>{listItems}</ol>);
  if (inUnorderedList) output.push(<ul>{listItems}</ul>);

  return output;
};
