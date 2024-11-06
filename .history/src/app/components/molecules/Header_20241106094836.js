import React from "react";

export default function Header({ toggleData, isDataDisplayed }) {
  return (
    <div>
      <h2>Rick and mortys code</h2>
      <button onClick={toggleData} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {isDataDisplayed ? "Clear Data" : "Fetch Data"}
      </button>
    </div>
  );
}
