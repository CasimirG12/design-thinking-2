import type { Message } from "../types/models";

export const messages: Message[] = [
  {
    id: 1,
    senderId: 1,
    recieverId: 3,
    timeSent: new Date("2025-03-03T13:24").toISOString(),
    message: "Hey, how are you doing?",
  },
  {
    id: 2,
    senderId: 3,
    recieverId: 2,
    timeSent: new Date("2025-03-03T14:00").toISOString(),
    message: "I’m doing well, thanks for asking! How about you?",
  },
  {
    id: 3,
    senderId: 3,
    recieverId: 1,
    timeSent: new Date("2025-03-04T09:15").toISOString(),
    message: "Good morning! Just wanted to check in with you.",
  },
  {
    id: 4,
    senderId: 2,
    recieverId: 3,
    timeSent: new Date("2025-03-04T10:30").toISOString(),
    message: "Morning! I’ll be free after lunch. Let’s catch up then.",
  },
  {
    id: 5,
    senderId: 3,
    recieverId: 1,
    timeSent: new Date("2025-03-05T16:45").toISOString(),
    message: "Are we still on for the meeting tomorrow?",
  },
  {
    id: 6,
    senderId: 3,
    recieverId: 2,
    timeSent: new Date("2025-03-06T08:30").toISOString(),
    message: "Just a reminder: meeting at 10 AM today.",
  },
  {
    id: 7,
    senderId: 1,
    recieverId: 3,
    timeSent: new Date("2025-03-07T12:00").toISOString(),
    message: "Sounds good. See you at 10!",
  },
  {
    id: 8,
    senderId: 3,
    recieverId: 2,
    timeSent: new Date("2025-03-08T17:20").toISOString(),
    message: "By the way, I sent over the documents you asked for.",
  },
  {
    id: 9,
    senderId: 3,
    recieverId: 1,
    timeSent: new Date("2025-03-09T11:30").toISOString(),
    message: "Let me know if you need any help with the presentation.",
  },
  {
    id: 10,
    senderId: 2,
    recieverId: 3,
    timeSent: new Date("2025-03-10T13:50").toISOString(),
    message: "Got it, thanks for sending that over!",
  },
];
