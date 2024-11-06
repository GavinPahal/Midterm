import React from "react";

export default function Header({ toggleData, isDataDisplayed }) {
  return (
    <div>
      <h2>Rick and Morty Code</h2>
      <button onClick={toggleData}>
        {isDataDisplayed ? "Clear Data" : "Fetch Data"}
      </button>
    </div>
  );
}
