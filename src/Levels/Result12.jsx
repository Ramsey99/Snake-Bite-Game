import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FinalResult12 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const origin = location.state?.origin || "unknown"; // Check the origin state from previous navigation
  const [allResults, setAllResults] = useState({});

  // Map of level results to their display titles
  const levelTitles = {
    level1Result: "Level 1",
    level2Result: "Level 2",
    level3Result: "Initial Management",
    level4Result: "Sign of Envenomation",
    level6Result: "AVS reaction",
    level8Result: "Signs of bleeding",
    level11Result: "Clotted",
    level12Result: "Not clotted",
  };

  useEffect(() => {
    // Retrieve each level's result from localStorage
    const results = {
      level1Result: JSON.parse(localStorage.getItem("level1Result")),
      level2Result: JSON.parse(localStorage.getItem("level2TextResult")),
      level3Result: JSON.parse(localStorage.getItem("level3Result")),
      level4Result: JSON.parse(localStorage.getItem("level4Result")),
      level6Result: JSON.parse(localStorage.getItem("level6Result")),
      level8Result: JSON.parse(localStorage.getItem("level8Result")),
      level11Result: JSON.parse(localStorage.getItem("level11Result")),
      level12Result: JSON.parse(localStorage.getItem("level12Result")),
    };

    // If the origin is `level8`, exclude `level11Result`
    if (origin === "level8") {
      delete results.level11Result;
    }

    setAllResults(results);
  }, [origin]);

  const handleHomeClick = () => {
    localStorage.clear(); // Clear all data from localStorage
    navigate("/"); // Redirect to the home page
  };

  const handleExitClick = () => {
    localStorage.clear(); // Clear all data from localStorage
    // Redirects to the browser's home page
    window.location.href = "https://google.com";
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">Final Results</h2>
      <p className="text-lg text-gray-600 mb-4 font-semibold">
        The options you selected since Level 1
      </p>
      {/* <p className="text-lg text-gray-600 mb-4">
        <span className="font-semibold text-blue-500">
          {origin === "level8" ? "Path from Level 8" : "Path from Level 11"}
        </span>
      </p> */}

      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
        <ul>
          {Object.entries(allResults).map(([level, result], index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {levelTitles[level] || level.replace("Result", "")}:
              </h3>
              {result ? (
                <p className="text-gray-600">{result.join(", ")}</p>
              ) : (
                <p className="text-gray-400">No result</p>
              )}
            </li>
          ))}
        </ul>
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

export default FinalResult12;
