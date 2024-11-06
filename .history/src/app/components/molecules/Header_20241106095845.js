import React from "react";

export default function Header({ toggleData, isDataDisplayed }) {
  return (
    <div className="header-container">
      <h2>Rick and Morty Code</h2>
      <div>
        <button onClick={toggleData}>
          {isDataDisplayed ? "Clear Data" : "Fetch Data"}
        </button>
        <img
          src="https://via.placeholder.com/50"
          alt="Placeholder"
          className="placeholder-image"
        />
      </div>
    </div>
  );
}
