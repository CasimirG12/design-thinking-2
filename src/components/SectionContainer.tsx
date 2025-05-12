import React, { useEffect, useRef, useState } from "react";
import { type DocSection, type User } from "../types/models";
import { useUserContext } from "../context/userContext";
import { FaEdit } from "react-icons/fa";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { useDocContext } from "../context/docContext";
import DeleteModal from "./DeleteModal";
import { useSectionRefs } from "../context/sectionRefsContext";
import { mdParser } from "../utils/mdParser";
import { useChat } from "../context/chatContext";

interface SectionContainerProps {
  section: DocSection;
  index: number;
}

const editContainerStyle = "bg-zinc-600 p-2 rounded border border-zinc-500";

const SectionContainer: React.FC<SectionContainerProps> = ({
  section,
  index,
}) => {
  const { setChatOpen, setMessageToSend, setSelectedUser } = useChat();
  const { users } = useUserContext();
  const { text, title, writerIds } = section;
  const { sections, setSections } = useDocContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const { activeIndices, setActiveIndices } = useSectionRefs();
  const [editValue, setEditValue] = useState<
    Partial<Pick<DocSection, "title" | "text" | "edit">>
  >({
    text,
    title,
    edit: section.edit,
  });
  const [selected, setSelected] = useState(false);

  const fetchWriters = (writerIds: number[]): User[] => {
    const writers = users.filter((user) => writerIds.includes(user.id));
    if (!writers) {
      throw new Error("Writers of the section were not found.");
    }
    return writers;
  };

  const writers = fetchWriters(writerIds);

  const handleSave = (sectionId: number) => {
    if (!editValue?.title || !editValue?.text) {
      return;
    }

    const { title, text } = editValue;

    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          title,
          text,
          edit: false,
        };
      }
      return section;
    });

    setSections(updatedSections);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    if (name === "title" || name === "text") {
      setEditValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const startEditing = (sectionId: number) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return { ...section, edit: true };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const onDeleteModelClose = (sectionId: number): void => {
    const updatedSections = sections.filter(
      (section) => section.id !== sectionId
    );
    setSections(updatedSections);
  };

  useEffect(() => {
    if (section.edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [section.edit]);

  useEffect(() => {
    if (!containerRef.current) return;
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedActiveIndices = new Set(activeIndices);

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updatedActiveIndices.add(index);
          } else {
            updatedActiveIndices.delete(index);
          }
        });

        setActiveIndices(updatedActiveIndices);
      },
      { threshold: 0.5 }
    );

    observer.observe(currentContainer);

    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
    };
  }, [index, activeIndices, setActiveIndices]);

  const askWriter = (writer: User) => {
    setMessageToSend(`Regarding $sec(${section.title}$${section.id}$)`);
    setChatOpen(true);
    setSelectedUser(writer);
  };

  return (
    <>
      <div
        tabIndex={0}
        ref={containerRef}
        className={`${
          selected ? "selected" : null
        } flex flex-col gap-4 bg-zinc-700 p-12 rounded mb-4`}
        id={`section-${section.id}`}
        onFocus={() => {
          if (!section.edit) setSelected(true);
        }}
        onClick={() => {
          setSelected(false);
        }}
        onBlur={() => {
          setSelected(false);
        }}
      >
        <div className="flex flex-row items-center justify-between">
          {section.edit ? (
            <input
              type="text"
              value={editValue.title}
              className={`${editContainerStyle} text-2xl`}
              name={"title"}
              onChange={handleChange}
              ref={inputRef}
            />
          ) : (
            <h1>{title}</h1>
          )}
          {section.edit ? (
            <div className="flex flex-row items-center gap-2">
              <button>
                <FaCheck
                  size={20}
                  className="text-emerald-500 cursor-pointer"
                  onClick={() => {
                    handleSave(section.id);
                  }}
                />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setDeleteModal(true);
                }}
              >
                <FaTrash
                  size={16}
                  className="text-zinc-500 hover:text-red-500"
                />
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                startEditing(section.id);
              }}
            >
              <FaEdit size={20} />
            </button>
          )}
        </div>
        <div className="flex flex-row gap-2 items-center">
          Written by:{" "}
          {writers.map((user, index) => (
            <button
              key={`writer-${index}`}
              className="bg-zinc-500 cursor-pointer px-2 py-1 rounded-full hover:opacity-80 active:scale-95 duration-200"
              onClick={() => askWriter(user)}
            >
              {user.name}
            </button>
          ))}
        </div>
        {section.edit ? (
          <textarea
            value={editValue.text}
            className={`${editContainerStyle} resize-none`} // Add resize-none to prevent resizing if needed
            name="text"
            onChange={handleChange}
            rows={20} // Adjust the rows to display multiple lines, you can increase this number for more space
            cols={50} // Adjust the number of columns (width), you can change this to fit your design
          />
        ) : (
          <div>{mdParser(text)}</div>
        )}
      </div>
      {deleteModal && (
        <DeleteModal
          onClose={() => {
            onDeleteModelClose(section.id);
          }}
          setDeleteModal={setDeleteModal}
        />
      )}
    </>
  );
};

export default SectionContainer;
