import { useState } from "react";
import "./index.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    }, 500);
  };

  const generateBotReply = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes("hello")) return "Hi there! How can I help you today?";
    if (lower.includes("help")) return "Sure! Ask me anything.";
    return "I'm just a simple bot. Let's chat!";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded shadow p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">ChatBot</h1>
        <div className="flex-1 overflow-y-auto h-80 border p-2 mb-4 rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded text-white max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 self-end ml-auto"
                  : "bg-gray-600 self-start mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
