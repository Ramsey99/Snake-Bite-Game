import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation

const FinalResult16 = () => {
  const [allResults, setAllResults] = useState({});
  const navigate = useNavigate(); // Initialize navigate for routing

  // Map of level results to their display titles
  const levelTitles = {
    level1Result: "Level 1",
    level2Result: "Level 2",
    level3Result: "Initial Management",
    level4Result: "Sign of Envenomation",
    level6Result: "AVS reaction",
    level7Result: "Neurological Sign",
    level10Result: "Not improving after 30 min",
    level14Result: "No improvement at 1 hour",
    level16Result: "Not improving after 1 hour",
  };

  useEffect(() => {
    // Retrieve each level's result from localStorage
    const results = {
      level1Result: JSON.parse(localStorage.getItem("level1Result")),
      level2Result: JSON.parse(localStorage.getItem("level2TextResult")),
      level3Result: JSON.parse(localStorage.getItem("level3Result")),
      level4Result: JSON.parse(localStorage.getItem("level4Result")),
      level6Result: JSON.parse(localStorage.getItem("level6Result")),
      level7Result: JSON.parse(localStorage.getItem("level7Result")),
      level10Result: JSON.parse(localStorage.getItem("level10Result")),
      level14Result: JSON.parse(localStorage.getItem("level14Result")),
      level16Result: JSON.parse(localStorage.getItem("level16Result")),
    };

    setAllResults(results); // Set the results in state
  }, []);

  // Function to handle Home button click
  const handleHomeClick = () => {
    localStorage.clear(); // Clear all data from localStorage
    navigate("/level1"); // Navigate to the Level1 page
  };

  const handleExitClick = () => {
    localStorage.clear(); // Clear all data from localStorage
    // Redirects to the browser's home page
    window.location.href = "https://google.com";;
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Game Results</h2>
      <p className="text-lg text-gray-600 mb-4 font-semibold" >
        The options you selected since Level 1
      </p>
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
        {Object.entries(allResults).map(([level, result], index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              {levelTitles[level] || level.replace("Result", "")}:
            </h3>
            {result ? (
              <p className="text-gray-600">{result.join(", ")}</p>
            ) : (
              <p className="text-gray-400">No selection</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleHomeClick}
          className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-600 transition"
        >
          Home
        </button>
        <button
          onClick={handleExitClick}
          className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-600 transition"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default FinalResult16;