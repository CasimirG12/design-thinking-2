import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./context/userContext.tsx";
import DocProvider from "./context/docContext.tsx";
import ChatProvider from "./context/chatContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
        <DocProvider>
          <App />
        </DocProvider>
      </ChatProvider>
    </UserProvider>
  </StrictMode>
);
