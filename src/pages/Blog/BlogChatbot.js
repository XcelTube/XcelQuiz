import React, { useState } from 'react';
import { X } from 'lucide-react';

const BlogChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: "👋 Hello! I’m your XcelTube learning assistant. Ask me anything!" }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const newMessages = [...messages, { type: 'user', text: inputMsg }];
    setMessages(newMessages);
    setInputMsg('');

    setTimeout(() => {
      const lower = inputMsg.toLowerCase();
      let botReply = "I'm still learning! Please check our Help Center for now.";

      if (lower.includes('hello') || lower.includes('hi')) {
        botReply = "Hi there! How can I help you today?";
      } else if (lower.includes('course') || lower.includes('learn')) {
        botReply = "We offer courses on AI, coding, and exam prep. Visit our Courses page!";
      } else if (lower.includes('contact') || lower.includes('support')) {
        botReply = "You can reach support at hello@xcel-tube.com.";
      }

      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 text-[#0a0a1a] text-xl font-bold shadow-lg hover:scale-110 transition z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        🤖
      </button>

      {/* Chat Panel */}
      <div className={`fixed bottom-24 right-6 w-80 h-[500px] bg-[#0a0a1a] border border-white/10 rounded-2xl shadow-lg flex flex-col transition-all duration-300 z-50 overflow-hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-5'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold px-4 py-3 flex justify-between items-center">
          <span>XcelTube Assistant</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm px-4 py-2 rounded-xl max-w-[80%] ${msg.type === 'bot'
                ? 'bg-white/10 text-white self-start'
                : 'bg-cyan-400 text-black self-end ml-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSend} className="p-4 border-t border-white/10">
          <input
            type="text"
            className="w-full rounded-full px-4 py-2 bg-white/10 text-white placeholder-white/50 focus:outline-none"
            placeholder="Ask me anything..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default BlogChatbot;
