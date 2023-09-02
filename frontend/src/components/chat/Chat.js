import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import chatData from "./Chat.json";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const chatBoxRef = useRef(null); // Reference for chat box div
  const textareaRef = useRef(null); // Reference for textarea

  const handleSend = () => {
    const newMessage = {
      id: "user",
      content: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  useEffect(() => {
    // Simulate receiving messages from the chatData file
    setMessages(chatData);
  }, []);

  // Use a useEffect to scroll to the bottom of the chat box when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className="App">
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((item, index) => {
          const className = item.id === "bot" ? "bot-message" : "user-message";
          return (
            <div key={index} className={className}>
              {item.content}
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <textarea
          value={input}
          onChange={handleTextareaChange}
          placeholder="Type your message..."
          className="input-textarea"
          ref={textareaRef}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        ></textarea>
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
