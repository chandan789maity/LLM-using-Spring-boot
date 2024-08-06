import React from "react";

function ResponseDisplay({ prompt, response }) {
  return (
    <div className="response">
      <div className="prompt-display">
        <strong>User prompt:</strong> {prompt}
      </div>
      <div className="ai-response">
        <strong>AI Response:</strong> <pre>{response}</pre>
      </div>
    </div>
  );
}

export default ResponseDisplay;
