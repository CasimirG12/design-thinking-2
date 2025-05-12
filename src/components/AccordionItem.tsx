import React, {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export interface AccordionItemProps {
  title: string;
  titleButtons?: ReactElement<HTMLButtonElement>[];
  children?: ReactNode;
  open?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  titleButtons,
  children,
  open = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-auto h-8 border border-solid border-zinc-500 p-2 flex flex-row items-center justify-between cursor-pointer">
        <div
          className="flex flex-row items-center gap-2 w-auto"
          onClick={onToggle}
        >
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          <p>{title}</p>
        </div>
        <div>{titleButtons ?? null}</div>
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight ?? "auto" : 0,
        }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
