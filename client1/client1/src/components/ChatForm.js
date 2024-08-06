import React, { useState } from "react";

function ChatForm({ onChat }) {
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
    <form onSubmit={handleSubmit}>
      <span className="prompt">User: </span>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
    </form>
  );
}

export default ChatForm;
