import React, { useState } from "react";
import ResponseDisplay from "../components/ResponseDisplay";
import ChatForm from "../components/ChatForm";
import { FaRobot } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import "animate.css";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  const handleChat = async (newPrompt) => {
    try {
      console.log("Sending prompt:", newPrompt);
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: newPrompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Received response:", data);
      setResponse(data);
      setPrompt(newPrompt);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setResponse("");
      setError("An error occurred while fetching the response.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black mx-auto">
      <div className="bg-slate-800 h-full w-4/5 pt-4 my-6 rounded-3xl p-6 shadow-2xl shadow-orange-400 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-bold pt-4 text-center text-violet-600 flex items-center justify-center">
          <FaRobot className="mr-2" />
          AI Chat
        </h1>
        <ChatForm onChat={handleChat} />
        {error && <p className="error text-red-500 text-center mt-4">{error}</p>}
        <ResponseDisplay prompt={prompt} response={response} />
      </div>
    </div>
  );
};

export default ChatPage;
