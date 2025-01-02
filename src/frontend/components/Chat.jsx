import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import { ChatbotFlow } from '../../buddy/main';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chats, setChats] = useState([
    { id: 1, name: 'General Chat', active: true },
    { id: 2, name: 'Project Discussion', active: false },
    { id: 3, name: 'Technical Support', active: false },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    try {
      // Show processing message
      const processingMessage = {
        id: messages.length + 2,
        text: "Processing your message...",
        isBot: true
      };
      setMessages((prev) => [...prev, processingMessage]);

      // Process message directly
      const chatbotFlow = new ChatbotFlow();
      const response = await chatbotFlow.kickoff({ topic: inputMessage });

      // Replace processing message with actual response
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove processing message
        {
          id: prev.length + 2,
          text: response,
          isBot: true
        }
      ]);
    } catch (error) {
      // Show error message
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove processing message
        {
          id: prev.length + 2,
          text: "Sorry, I couldn't process your message. Please try again.",
          isBot: true
        }
      ]);
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-16 pb-0">
        <div className="h-[calc(100vh-4rem)] flex">
          {/* Side Panel */}
          <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-white font-semibold">Chats</h2>
              <button 
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"
                onClick={() => setChats([...chats, { id: chats.length + 1, name: `New Chat ${chats.length + 1}`, active: false }])}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 cursor-pointer hover:bg-gray-800 transition ${
                    chat.active ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => {
                    const updatedChats = chats.map(c => ({
                      ...c,
                      active: c.id === chat.id
                    }));
                    setChats(updatedChats);
                  }}
                >
                  <span className="text-white">{chat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="bg-gray-900 flex-1 flex flex-col">
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chat;
