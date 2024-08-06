import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const ChatForm = ({ onChat }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() === "") {
      alert("Please enter a prompt");
      return;
    }
    onChat(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md mt-6 animate__animated animate__fadeInUp">
      <span className="text-white font-semibold mr-2">User:</span>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
        className="flex-grow px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700 flex items-center"
      >
        Send <AiOutlineSend className="ml-1" />
      </button>
    </form>
  );
};

export default ChatForm;
