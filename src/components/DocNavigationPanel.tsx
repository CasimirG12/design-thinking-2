import { FaPlus } from "react-icons/fa6";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import { useDocContext } from "../context/docContext";
import type { Documentation } from "../types/models";
import { useUserContext } from "../context/userContext";
import UserStatusElement from "./UserStatusElement";
import TableOfContent from "./TableOfContent";

interface DocNavigationPanelProps {
  documentation: Documentation;
}

const DocNavigationPanel: React.FC<DocNavigationPanelProps> = ({
  documentation,
}) => {
  const { addSection } = useDocContext();
  const { users, currentUser } = useUserContext();
  const { id } = documentation;
  return (
    <div className="w-70 bg-zinc-900 border border-solid border-zinc-500">
      <Accordion>
        <AccordionItem
          title="Front End"
          titleButtons={[
            <button
              className="hover:opacity-80 cursor-pointer"
              onClick={() => addSection(id)}
            >
              <FaPlus />
            </button>,
          ]}
          open={true}
        >
          <TableOfContent doc={documentation} />
        </AccordionItem>
        <AccordionItem title="Team">
          {users.map((user, index) => {
            if (user.id !== currentUser?.id) {
              return (
                <UserStatusElement key={`usrStatus-${index}`} user={user} />
              );
            }
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DocNavigationPanel;
