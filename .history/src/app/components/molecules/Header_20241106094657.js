import React from "react";

export default function Header({ toggleData, isDataDisplayed }) {
  return (
    <div>
      <button onClick={toggleData} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {isDataDisplayed ? "Clear Data" : "Fetch Data"}
      </button>
    </div>
  );
}
