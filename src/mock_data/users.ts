import type { User } from "../types/models";

export const users: User[] = [
  {
    id: 1,
    name: "Xu, Zelong",
    status: "available",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
  {
    id: 2,
    name: "Sommer, Emili",
    status: "hyperfocus",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
  {
    id: 3,
    name: "Bomans, Casimir",
    status: "available",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
  {
    id: 4,
    name: "Goodarzi, Ehsan",
    status: "offline",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
  {
    id: 5,
    name: "Jabeen, Hafsa",
    status: "in meeting",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
  {
    id: 6,
    name: "Mayer, Elon",
    status: "available",
    chatInbox: [],
    chatWaitingList: [],
    docEntries: [],
  },
];

export const currentUser: User = {
  id: 3,
  name: "Bomans, Casimir",
  status: "available",
  chatInbox: [],
  chatWaitingList: [],
  docEntries: [],
};
