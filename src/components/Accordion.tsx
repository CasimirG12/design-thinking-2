import React, { useState, type ReactElement } from "react";
import { type AccordionItemProps } from "./AccordionItem";

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[];
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndexArray, setOpenIndexArray] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    let updatedIndexArray: number[];
    if (openIndexArray.includes(index)) {
      updatedIndexArray = openIndexArray.filter((i) => i !== index);
    } else {
      updatedIndexArray = [...openIndexArray, index];
    }
    setOpenIndexArray(updatedIndexArray);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            open: openIndexArray.includes(index),
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export default Accordion;
