import React,{useState} from "react";
import ResponseDisplay from "../components/ResponseDisplay"
import ChatForm from "../components/ChatForm"

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
        body: JSON.stringify(newPrompt),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Received response:", data);
      setResponse(data);
      setPrompt(newPrompt); // Set the prompt so it can be displayed
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setResponse("");
      setError("An error occurred while fetching the response.");
    }
  };
  return (
    <div>
      <h1>AI Chat</h1>
      <ChatForm onChat={handleChat} />
      {error && <p className="error">{error}</p>}
      <ResponseDisplay prompt={prompt} response={response} />
    </div>
  );
};

export default ChatPage;
