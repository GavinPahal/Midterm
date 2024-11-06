import React from "react";

export default function Header({ toggleData, isDataDisplayed }) {
  return (
    <div className="header-container text-center">
      <h2>Rick and Morty Code</h2>
      <div className="button-container flex flex-col items-center">
        <button onClick={toggleData} className="mb-4">
          {isDataDisplayed ? "Clear Data" : "Fetch Data"}
        </button>
        <img
          src="https://via.placeholder.com/100"
          alt="Placeholder"
          className="placeholder-image w-32 h-32"
        />
      </div>
    </div>
  );
}
