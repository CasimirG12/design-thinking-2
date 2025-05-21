export type User = {
  id: number;
  name: string;
  status: Status;
  chatInbox: Message[];
  chatWaitingList: Message[];
  docEntries: number[];
};

export type Status = "available" | "hyperfocus" | "in meeting" | "offline";

export type MessageStatus = "sent" | "waiting";

export type Message = {
  id: number;
  senderId: number;
  recieverId: number;
  message: string;
  timeSent: string;
  status: MessageStatus;
};

export type Documentation = {
  id: number;
  creatorId: number;
  contributerIds: number[];
  dateCreated: string;
  lastEdited: string;
};

export type DocSection = {
  id: number;
  docId: number;
  writerIds: number[];
  title: string;
  text: string;
  dateCreated: string;
  lastEdited: string;
  edit: boolean;
};

export type Chat = {
  id: string;
  messages: Message[];
};
