import React from "react";

export default function Header({ fetchData, clearData }) {
  return (
    <header className="header">
      <h1 className="header-title">Rick and Morty Characters</h1>
      <div className="button-container">
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <button className="clear-button" onClick={clearData}>
          Clear Data
        </button>
      </div>
    </header>
  );
}
