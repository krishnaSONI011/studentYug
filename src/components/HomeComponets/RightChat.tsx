"use client";
import { useState } from "react";

type Message = {
  id: string;
  author: string;
  text: string;
  time: string;
};

export default function RightChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", author: "Priya", text: "Welcome to the community!", time: "10:10" },
    { id: "2", author: "Rohan", text: "Anyone joining football practice?", time: "10:12" },
    { id: "3", author: "Sara", text: "Plantation drive this weekend 🌱", time: "10:15" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: String(Date.now()),
      author: "You",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="mt-16 fixed right-0 top-0 h-screen w-[28vw] md:w-[26vw] lg:w-[24vw] bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-base font-semibold text-gray-900">Community Chat</p>
        <p className="text-xs text-gray-500">Join discussions with students</p>
      </div>

      {/* Rooms */}
      <div className="px-3 py-2 border-b border-gray-100 flex gap-2 overflow-x-auto">
        {["General", "Sports", "Trees", "Events", "Clubs"].map((room) => (
          <button key={room} className="px-3 py-1.5 rounded-full text-xs bg-gray-100 hover:bg-green-100 text-gray-700">
            {room}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="flex flex-col">
            <div className="text-xs text-gray-500 mb-0.5">{m.author} • {m.time}</div>
            <div className={`max-w-[85%] w-fit rounded-lg px-3 py-2 text-sm ${m.author === "You" ? "bg-green-50 text-gray-900 self-end" : "bg-gray-100 text-gray-900"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
          placeholder="Write a message..."
          className="flex-1 text-sm px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-200"
        />
        <button onClick={handleSend} className="px-3 py-2 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700">
          Send
        </button>
      </div>
    </div>
  );
}


