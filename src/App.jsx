import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello", sender: "user", id: "1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "2" },
    { message: "What is your name?", sender: "user", id: "3" },
    { message: "My name is ChatGPT.", sender: "robot", id: "4" },
  ]);
  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </div>
  );
}

export default App;
// export default ChatMessages;  // 一个文件只能有一个 default
// export { ChatMessages, ChatInput };  // 可以同时出口多个
