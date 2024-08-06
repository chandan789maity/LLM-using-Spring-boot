import React from "react";
import { FaUser, FaRobot } from "react-icons/fa";

const ResponseDisplay = ({ prompt, response }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-6 animate__animated animate__fadeInUp">
      <div className="mb-4">
        <div className="text-white font-semibold flex items-center">
          <FaUser className="mr-2" /> User prompt:
        </div>
        <div className="mt-2 p-2 bg-gray-700 rounded-lg text-white">
          {prompt}
        </div>
      </div>
      <div>
        <div className="text-white font-semibold flex items-center">
          <FaRobot className="mr-2" /> AI Response:
        </div>
        <div className="h-72 overflow-y-auto">
        <div className="mt-2 p-2 bg-gray-700 rounded-lg text-white whitespace-pre-wrap">
          {response}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
