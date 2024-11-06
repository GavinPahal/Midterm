import React from "react";

export default function Header({ fetchData, clearData }) {
  return (
    <header className="flex items-center gap-4">
      <button onClick={fetchData} className="p-2 bg-blue-500 text-white rounded">
        Fetch Data
      </button>
      <button onClick={clearData} className="p-2 bg-gray-300 rounded">
        Clear Data
      </button>
    </header>
  );
}
